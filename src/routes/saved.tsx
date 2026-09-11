import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AuthChip } from "@/components/auth-chip";
import { BottomNav } from "@/components/bottom-nav";
import { heroImage } from "@/lib/markers";
import { canReviewQueue } from "@/lib/sources";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/saved")({ component: SavedPage });

function SavedPage() {
  const load = useAppStore((s) => s.load);
  const markers = useAppStore((s) => s.markers);
  const favorites = useAppStore((s) => s.favorites);
  const visited = useAppStore((s) => s.visited);

  const { user } = useCurrentUserState();
  const [editor, setEditor] = useState(false);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!user) {
      setEditor(false);
      return;
    }
    void canReviewQueue()
      .then(setEditor)
      .catch(() => setEditor(false));
  }, [user]);

  const saved = useMemo(
    () => favorites.map((id) => markers.find((m) => m.id === id)).filter(Boolean),
    [favorites, markers],
  );
  const seen = useMemo(
    () => visited.map((id) => markers.find((m) => m.id === id)).filter(Boolean),
    [visited, markers],
  );

  return (
    <main
      className="min-h-dvh bg-background pb-24"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <header className="flex items-start justify-between gap-3 px-4 pt-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Library
          </p>
          <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">Saved</h1>
        </div>
        <AuthChip next="/saved" />
      </header>
      {editor ? (
        <p className="px-4 pt-3">
          <Link to="/review" className="text-sm font-medium text-accent">
            Review pending plates
          </Link>
        </p>
      ) : null}
      <section className="mt-6">
        <h2 className="px-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Bookmarks
        </h2>
        {saved.length === 0 ? (
          <p className="px-4 py-6 text-sm text-muted">
            Bookmark markers from the map to build a personal field list.
          </p>
        ) : (
          <ul className="mt-2 divide-y divide-border border-y border-border">
            {saved.map((m) =>
              m ? (
                <li key={m.id}>
                  <Link
                    to="/markers/$id"
                    params={{ id: m.id }}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <img src={heroImage(m)} alt="" className="size-12 rounded-md object-cover" />
                    <span className="min-w-0 flex-1 truncate font-medium">{m.name}</span>
                    <ChevronRight className="size-4 text-muted" />
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        )}
      </section>
      <section className="mt-8">
        <h2 className="px-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Visited · {seen.length}
        </h2>
        <ul className="mt-2 divide-y divide-border border-y border-border">
          {seen.map((m) =>
            m ? (
              <li key={m.id}>
                <Link
                  to="/markers/$id"
                  params={{ id: m.id }}
                  className="flex items-center gap-3 px-4 py-3"
                >
                  <img src={heroImage(m)} alt="" className="size-12 rounded-md object-cover" />
                  <span className="min-w-0 flex-1 truncate font-medium">{m.name}</span>
                  <ChevronRight className="size-4 text-muted" />
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      </section>
      <BottomNav />
    </main>
  );
}
