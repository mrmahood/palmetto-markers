import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { TOURS } from "@/data/tours";

export const Route = createFileRoute("/tours")({ component: ToursPage });

function ToursPage() {
  return (
    <main
      className="min-h-dvh bg-background pb-24"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <header className="px-4 pt-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Curated
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">Tours</h1>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Short drives and walks stitched from official markers. Each stop has a
          spoken lesson and an AR scene.
        </p>
      </header>
      <ul className="mt-6 space-y-3 px-4">
        {TOURS.map((t) => (
          <li key={t.id}>
            <Link
              to="/tours/$id"
              params={{ id: t.id }}
              className="block overflow-hidden rounded-2xl border border-border bg-elevated"
            >
              <img src={t.image} alt="" className="h-36 w-full object-cover" />
              <div className="flex items-end justify-between gap-3 p-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    {t.region} · {t.markerIds.length} stops
                  </p>
                  <h2 className="mt-1 font-display text-xl font-medium leading-snug">
                    {t.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t.blurb}</p>
                </div>
                <ChevronRight className="mb-1 size-5 shrink-0 text-muted" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <BottomNav />
    </main>
  );
}
