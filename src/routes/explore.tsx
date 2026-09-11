import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, ChevronRight, Search } from "lucide-react";
import { AuthChip } from "@/components/auth-chip";
import { BottomNav } from "@/components/bottom-nav";
import { InstallHint } from "@/components/install-hint";
import { ERA_LABEL, heroImage, REGION_ORDER, THEME_LABEL } from "@/lib/markers";
import { cn } from "@/lib/utils";
import { selectFiltered, useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/explore")({ component: ExplorePage });

function ExplorePage() {
  const load = useAppStore((s) => s.load);
  const markers = useAppStore((s) => s.markers);
  const filters = useAppStore((s) => s.filters);
  const setFilter = useAppStore((s) => s.setFilter);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    void load();
  }, [load]);

  const list = useMemo(() => {
    const next = selectFiltered(markers, {
      ...filters,
      theme: theme ?? filters.theme,
    });
    return next.slice(0, 80);
  }, [markers, filters, theme]);

  const themes = Object.entries(THEME_LABEL);

  return (
    <main
      className="min-h-dvh bg-background pb-24"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <header className="px-4 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Atlas
            </p>
            <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
              Explore
            </h1>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <AuthChip next="/explore" />
            <Link
              to="/saved"
              className="flex size-11 items-center justify-center rounded-lg border border-border bg-elevated"
              aria-label="Saved markers"
            >
              <Bookmark className="size-4" />
            </Link>
          </div>
        </div>
        <label className="mt-4 flex h-11 items-center gap-2 rounded-xl border border-border bg-elevated px-3">
          <Search className="size-4 text-muted" />
          <input
            value={filters.query}
            onChange={(e) => setFilter({ query: e.target.value })}
            placeholder="Search 2,100+ markers"
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted"
            suppressHydrationWarning
          />
        </label>
      </header>
      <InstallHint />

      <section className="mt-5 px-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Region
        </p>
        <div className="mt-2 flex gap-1.5 overflow-x-auto">
          {REGION_ORDER.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setFilter({ region: filters.region === r ? null : r })}
              className={cn(
                "h-8 shrink-0 rounded-full border px-3 text-xs font-medium",
                filters.region === r
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-elevated",
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-4 px-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Theme
        </p>
        <div className="mt-2 flex gap-1.5 overflow-x-auto">
          {themes.map(([key, name]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTheme(theme === key ? null : key)}
              className={cn(
                "h-8 shrink-0 rounded-full border px-3 text-xs font-medium",
                theme === key
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-elevated",
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </section>

      <ul className="mt-5 divide-y divide-border border-y border-border">
        {list.map((m) => (
          <li key={m.id}>
            <Link
              to="/markers/$id"
              params={{ id: m.id }}
              className="flex items-center gap-3 px-4 py-3"
            >
              <img
                src={heroImage(m)}
                alt=""
                className="size-14 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium leading-snug">{m.name}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {m.city || m.county} · {ERA_LABEL[m.era] ?? m.era} · {m.id}
                </p>
              </div>
              <ChevronRight className="size-4 text-muted" />
            </Link>
          </li>
        ))}
      </ul>
      {list.length === 0 ? (
        <p className="px-4 py-10 text-center text-sm text-muted">
          No markers match that search.
        </p>
      ) : null}
      <BottomNav />
    </main>
  );
}
