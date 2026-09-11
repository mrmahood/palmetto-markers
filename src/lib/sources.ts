import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { REVIEWER_EMAILS } from "@/lib/reviewers";
import type { Plate } from "@/lib/markers";

export const LICENSES = ["pd", "cc-by", "cc-by-sa", "own"] as const;
export type License = (typeof LICENSES)[number];

export type Submission = {
  id: number;
  markerId: string;
  imageUrl: string;
  credit: string;
  capturedDate: string;
  caption: string;
  license: string;
  exact: boolean;
  status: string;
  reviewNote: string;
  createdAt: string;
};

type Row = {
  id: number;
  marker_id: string;
  image_url: string;
  credit: string;
  captured_date: string;
  caption: string;
  license: string;
  exact: boolean;
  status: string;
  review_note: string;
  created_at: string;
};

function toSubmission(r: Row): Submission {
  return {
    id: r.id,
    markerId: r.marker_id,
    imageUrl: r.image_url,
    credit: r.credit,
    capturedDate: r.captured_date,
    caption: r.caption,
    license: r.license,
    exact: r.exact,
    status: r.status,
    reviewNote: r.review_note,
    createdAt: r.created_at,
  };
}

function asPlate(r: Pick<Row, "image_url" | "credit" | "exact" | "caption">): Plate {
  return {
    src: r.image_url,
    credit: r.credit,
    exact: Boolean(r.exact),
    caption: r.caption || undefined,
  };
}

function httpsUrl(raw: string): string | null {
  try {
    const u = new URL(raw.trim());
    if (u.protocol !== "https:") return null;
    const host = u.hostname.toLowerCase();
    if (host === "localhost" || host.endsWith(".local") || host === "127.0.0.1")
      return null;
    return u.toString().slice(0, 2000);
  } catch {
    return null;
  }
}

function clip(s: string, max: number) {
  return s.replace(/\s+/g, " ").trim().slice(0, max);
}

async function reviewerOk(userId: string): Promise<boolean> {
  const { isWorkspacePreview } = await import("@/lib/env.server");
  if (isWorkspacePreview()) return true;
  const { getSessionUser } = await import("@/lib/auth/verify.server");
  const u = await getSessionUser();
  if (!u || u.id !== userId) return false;
  const email = u.email?.toLowerCase() ?? "";
  return REVIEWER_EMAILS.some((e) => e.toLowerCase() === email);
}

export const listAcceptedPlates = createServerFn({ method: "GET" })
  .validator((markerId: string) => markerId.trim().slice(0, 20))
  .handler(async ({ data: markerId }): Promise<Plate[]> => {
    if (!markerId) return [];
    const sql = await getSql();
    const rows = await sql<Row>`
      select id, marker_id, image_url, credit, captured_date, caption, license,
             exact, status, review_note, created_at::text as created_at
      from photo_submissions
      where marker_id = ${markerId} and status = 'accepted'
      order by exact desc, created_at desc
    `;
    return rows.map(asPlate);
  });

export const listMySubmissions = createServerFn({ method: "GET" })
  .validator((markerId: string) => markerId.trim().slice(0, 20))
  .middleware([authMiddleware])
  .handler(async ({ context, data: markerId }): Promise<Submission[]> => {
    const sql = await getSql();
    const rows = await sql<Row>`
      select id, marker_id, image_url, credit, captured_date, caption, license,
             exact, status, review_note, created_at::text as created_at
      from photo_submissions
      where user_id = ${context.userId} and marker_id = ${markerId}
      order by created_at desc
      limit 20
    `;
    return rows.map(toSubmission);
  });

export type SubmitInput = {
  markerId: string;
  imageUrl: string;
  credit: string;
  capturedDate: string;
  caption: string;
  license: string;
  exact: boolean;
};

export const submitPlate = createServerFn({ method: "POST" })
  .validator((input: SubmitInput) => input)
  .middleware([authMiddleware])
  .handler(async ({ context, data }): Promise<{ ok: true } | { ok: false; error: string }> => {
    const markerId = clip(data.markerId ?? "", 20);
    const imageUrl = httpsUrl(data.imageUrl ?? "");
    const credit = clip(data.credit ?? "", 400);
    const caption = clip(data.caption ?? "", 800);
    const capturedDate = clip(data.capturedDate ?? "", 80);
    const license = (data.license ?? "").trim();
    if (!markerId) return { ok: false, error: "Missing marker." };
    if (!imageUrl) return { ok: false, error: "Need an https link to the image." };
    if (credit.length < 8) return { ok: false, error: "Credit the source (who, which archive)." };
    if (caption.length < 12) return { ok: false, error: "Say who or what is in the picture." };
    if (!LICENSES.includes(license as License))
      return { ok: false, error: "Pick a license we can defend." };
    const sql = await getSql();
    await sql`
      insert into photo_submissions
        (marker_id, user_id, image_url, credit, captured_date, caption, license, exact)
      values
        (${markerId}, ${context.userId}, ${imageUrl}, ${credit}, ${capturedDate},
         ${caption}, ${license}, ${Boolean(data.exact)})
    `;
    return { ok: true };
  });

export const canReviewQueue = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => reviewerOk(context.userId));

export const listPendingPlates = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<Submission[]> => {
    if (!(await reviewerOk(context.userId))) return [];
    const sql = await getSql();
    const rows = await sql<Row>`
      select id, marker_id, image_url, credit, captured_date, caption, license,
             exact, status, review_note, created_at::text as created_at
      from photo_submissions
      where status = 'pending'
      order by created_at asc
      limit 80
    `;
    return rows.map(toSubmission);
  });

export type ReviewInput = { id: number; accept: boolean; note: string };

export const reviewPlate = createServerFn({ method: "POST" })
  .validator((input: ReviewInput) => input)
  .middleware([authMiddleware])
  .handler(async ({ context, data }): Promise<{ ok: boolean }> => {
    if (!(await reviewerOk(context.userId))) return { ok: false };
    const id = Number(data.id);
    if (!Number.isFinite(id) || id < 1) return { ok: false };
    const status = data.accept ? "accepted" : "rejected";
    const note = clip(data.note ?? "", 400);
    const sql = await getSql();
    await sql`
      update photo_submissions
      set status = ${status},
          review_note = ${note},
          reviewed_by = ${context.userId},
          reviewed_at = now()
      where id = ${id} and status = 'pending'
    `;
    return { ok: true };
  });
