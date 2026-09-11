import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  canReviewQueue,
  listPendingPlates,
  reviewPlate,
  type Submission,
} from "@/lib/sources";

export const Route = createFileRoute("/review")({ component: ReviewPage });

function ReviewPage() {
  const { user, isPending } = useCurrentUserState();
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Submission[]>([]);
  const [note, setNote] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!user) return;
    void canReviewQueue()
      .then((ok) => {
        setAllowed(ok);
        if (ok) return listPendingPlates().then(setRows);
      })
      .catch(() => setAllowed(false));
  }, [user]);

  if (isPending) {
    return (
      <main className="grid min-h-dvh place-items-center bg-background text-sm text-muted">
        Checking editor access…
      </main>
    );
  }
  if (!user) return <RedirectToSignIn to="/login" />;
  if (allowed === false) {
    return (
      <main className="grid min-h-dvh place-items-center bg-background px-6 text-center">
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          This queue is for named editors. Add your sign-in email to the
          reviewer list if you keep the atlas.
        </p>
      </main>
    );
  }

  async function decide(id: number, accept: boolean) {
    await reviewPlate({ data: { id, accept, note: note[id] ?? "" } });
    setRows((rows) => rows.filter((r) => r.id !== id));
  }

  return (
    <main
      className="min-h-dvh bg-background pb-24"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <header className="px-4 pt-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Editors
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          Pending plates
        </h1>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Accept only sourced historical images. Reject invented scenes, missing
          credits, and snapshots of the plaque itself.
        </p>
      </header>
      {rows.length === 0 && allowed ? (
        <p className="px-4 py-10 text-sm text-muted">Queue is clear.</p>
      ) : (
        <ul className="mt-6 space-y-6 px-4">
          {rows.map((s) => (
            <li key={s.id} className="overflow-hidden rounded-2xl border border-border bg-elevated">
              <img src={s.imageUrl} alt="" className="h-48 w-full object-cover" />
              <div className="p-4">
                <Link
                  to="/markers/$id"
                  params={{ id: s.markerId }}
                  className="text-xs font-medium uppercase tracking-[0.16em] text-accent"
                >
                  {s.markerId}
                </Link>
                <p className="mt-1 text-sm leading-relaxed">{s.caption}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{s.credit}</p>
                <p className="mt-1 text-xs text-muted">
                  {s.license}
                  {s.capturedDate ? ` · ${s.capturedDate}` : ""}
                  {s.exact ? " · subject" : " · related"}
                </p>
                <input
                  value={note[s.id] ?? ""}
                  onChange={(e) =>
                    setNote((n) => ({ ...n, [s.id]: e.target.value }))
                  }
                  placeholder="Note to the contributor"
                  className="mt-3 w-full rounded-lg border border-border bg-subtle px-3 py-2 text-sm outline-none"
                />
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button onClick={() => void decide(s.id, true)}>Accept</Button>
                  <Button
                    variant="secondary"
                    onClick={() => void decide(s.id, false)}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <BottomNav />
    </main>
  );
}
