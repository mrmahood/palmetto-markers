import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SignInGate } from "@/lib/auth/gates";
import { cn } from "@/lib/utils";
import {
  LICENSES,
  listMySubmissions,
  submitPlate,
  type Submission,
} from "@/lib/sources";

const LICENSE_LABEL: Record<string, string> = {
  pd: "Public domain",
  "cc-by": "CC BY",
  "cc-by-sa": "CC BY-SA",
  own: "I own this and release it",
};

export function SuggestPlate({ markerId }: { markerId: string }) {
  return (
    <section className="mt-8 border-t border-border pt-6">
      <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        Source a photograph
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        A plate of the mill, the person, the church — not a snapshot of the
        roadside sign. Link a Library of Congress, NARA, HABS, or museum
        catalog image. It stays pending until an editor accepts it.
      </p>
      <SignInGate
        fallback={
          <Link
            to="/login"
            search={{ next: `/markers/${markerId}` }}
            className="mt-4 inline-flex h-11 items-center rounded-lg border border-border bg-elevated px-4 text-sm font-medium"
          >
            Sign in to suggest a plate
          </Link>
        }
      >
        <SuggestForm markerId={markerId} />
      </SignInGate>
    </section>
  );
}

function SuggestForm({ markerId }: { markerId: string }) {
  const [imageUrl, setImageUrl] = useState("");
  const [credit, setCredit] = useState("");
  const [capturedDate, setCapturedDate] = useState("");
  const [caption, setCaption] = useState("");
  const [license, setLicense] = useState("pd");
  const [exact, setExact] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [mine, setMine] = useState<Submission[]>([]);

  useEffect(() => {
    void listMySubmissions({ data: markerId }).then(setMine).catch(() => setMine([]));
  }, [markerId, done]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await submitPlate({
        data: { markerId, imageUrl, credit, capturedDate, caption, license, exact },
      });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setDone(true);
      setImageUrl("");
      setCredit("");
      setCaption("");
      setCapturedDate("");
    } catch {
      setError("Could not send. Sign in again and retry.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-4">
      {mine.length > 0 ? (
        <ul className="mb-4 space-y-2">
          {mine.map((s) => (
            <li
              key={s.id}
              className="rounded-lg border border-border bg-elevated px-3 py-2 text-xs leading-relaxed text-muted"
            >
              <span className="font-medium text-foreground">{s.status}</span>
              {" · "}
              {s.caption}
              {s.reviewNote ? ` — ${s.reviewNote}` : ""}
            </li>
          ))}
        </ul>
      ) : null}
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Field label="Image URL (https)">
          <input
            required
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://www.loc.gov/…"
            className={fieldClass}
          />
        </Field>
        <Field label="Who / what is in the picture">
          <textarea
            required
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Lewis Hine, doffers at Aragon Mill, Rock Hill, 1912"
            className={fieldClass}
          />
        </Field>
        <Field label="Credit / archive">
          <input
            required
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            placeholder="Library of Congress, Prints & Photographs"
            className={fieldClass}
          />
        </Field>
        <Field label="Date on the plate">
          <input
            value={capturedDate}
            onChange={(e) => setCapturedDate(e.target.value)}
            placeholder="1912"
            className={fieldClass}
          />
        </Field>
        <Field label="License">
          <select
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            className={fieldClass}
          >
            {LICENSES.map((id) => (
              <option key={id} value={id}>
                {LICENSE_LABEL[id]}
              </option>
            ))}
          </select>
        </Field>
        <label className="flex items-start gap-2 text-sm leading-relaxed">
          <input
            type="checkbox"
            checked={exact}
            onChange={(e) => setExact(e.target.checked)}
            className="mt-1"
          />
          This depicts the marker’s subject, not a related scene.
        </label>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        {done ? (
          <p className="text-sm text-accent">Queued for review. Thank you.</p>
        ) : null}
        <Button type="submit" disabled={busy} className="w-full">
          {busy ? "Sending…" : "Submit for review"}
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

const fieldClass = cn(
  "w-full rounded-lg border border-border bg-elevated px-3 py-2.5 text-sm",
  "text-foreground outline-none placeholder:text-muted",
);
