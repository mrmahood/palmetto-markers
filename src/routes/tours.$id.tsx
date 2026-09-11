import { useEffect, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { TOURS } from "@/data/tours";
import { ERA_LABEL, heroImage } from "@/lib/markers";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/tours/$id")({ component: TourDetail });

function TourDetail() {
  const { id } = Route.useParams();
  const tour = TOURS.find((t) => t.id === id);
  const load = useAppStore((s) => s.load);
  const markers = useAppStore((s) => s.markers);

  useEffect(() => {
    void load();
  }, [load]);

  const stops = useMemo(() => {
    if (!tour) return [];
    return tour.markerIds
      .map((mid) => markers.find((m) => m.id === mid))
      .filter((m): m is NonNullable<typeof m> => Boolean(m));
  }, [tour, markers]);

  if (!tour) {
    return (
      <main className="p-6">
        <p>Tour not found.</p>
        <Link to="/tours" className="text-accent">
          Back
        </Link>
      </main>
    );
  }

  return (
    <main
      className="min-h-dvh bg-background pb-24"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative">
        <img src={tour.image} alt="" className="h-52 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <Link
          to="/tours"
          className="absolute left-3 top-3 flex size-11 items-center justify-center rounded-lg bg-elevated/90"
          aria-label="Back"
        >
          <ArrowLeft className="size-5" />
        </Link>
      </div>
      <header className="-mt-10 relative px-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
          {tour.region} · {stops.length} markers
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
          {tour.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">{tour.blurb}</p>
      </header>
      <ol className="mt-6 divide-y divide-border border-y border-border">
        {stops.map((m, i) => (
          <li key={m.id}>
            <Link
              to="/markers/$id"
              params={{ id: m.id }}
              className="flex items-center gap-3 px-4 py-3"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-xs tabular-nums text-muted">
                {i + 1}
              </span>
              <img src={heroImage(m)} alt="" className="size-12 rounded-md object-cover" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{m.name}</p>
                <p className="text-xs text-muted">
                  {m.city || m.county} · {ERA_LABEL[m.era] ?? m.era}
                </p>
              </div>
              <ChevronRight className="size-4 text-muted" />
            </Link>
          </li>
        ))}
      </ol>
      <BottomNav />
    </main>
  );
}
