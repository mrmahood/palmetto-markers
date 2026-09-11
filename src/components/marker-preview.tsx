import { Link } from "@tanstack/react-router";
import { Bookmark, MapPin, ScanLine, Volume2, X } from "lucide-react";
import type { Marker } from "@/lib/markers";
import { ERA_LABEL, heroImage } from "@/lib/markers";
import { formatKm } from "@/lib/geo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";

type Props = {
  marker: Marker;
  km?: number | null;
  onClose: () => void;
};

export function MarkerPreview({ marker, km, onClose }: Props) {
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const saved = favorites.includes(marker.id);
  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-[4.6rem] z-30 px-3">
      <article className="overflow-hidden rounded-2xl border border-border bg-elevated shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="flex gap-3 p-3">
          <img
            src={heroImage(marker)}
            alt=""
            className="h-[5.5rem] w-[4.5rem] shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {marker.id} · {ERA_LABEL[marker.era] ?? marker.era}
                </p>
                <h2 className="mt-0.5 truncate font-display text-lg font-medium leading-snug">
                  {marker.name}
                </h2>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                  <MapPin className="size-3.5" />
                  {[marker.city, marker.county].filter(Boolean).join(" · ")}
                  {km != null ? ` · ${formatKm(km)}` : ""}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="flex size-9 shrink-0 items-center justify-center rounded-md text-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
              {marker.front}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-t border-border p-3">
          <Link to="/markers/$id" params={{ id: marker.id }} className="block">
            <Button className="w-full" size="md">
              <Volume2 className="size-4" />
              Lesson
            </Button>
          </Link>
          <Link to="/ar" search={{ id: marker.id }}>
            <Button variant="secondary" size="icon" aria-label="Scan">
              <ScanLine className="size-4" />
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="icon"
            aria-label={saved ? "Remove bookmark" : "Bookmark"}
            onClick={() => toggleFavorite(marker.id)}
          >
            <Bookmark className={cn("size-4", saved && "fill-accent text-accent")} />
          </Button>
        </div>
      </article>
    </div>
  );
}
