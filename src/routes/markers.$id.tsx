import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, MapPin, Pause, Volume2 } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { SuggestPlate } from "@/components/suggest-plate";
import { Button } from "@/components/ui/button";
import {
  ERA_LABEL,
  getMarker,
  platesFor,
  inscription,
  spokenLesson,
  type Marker,
  type Plate,
} from "@/lib/markers";
import { listAcceptedPlates } from "@/lib/sources";
import { directionsUrl } from "@/lib/geo";
import { playLesson, stopSpeaking, unlockSpeech } from "@/lib/speech";
import { NARRATORS, getNarrator, type NarratorId } from "@/lib/voices";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/markers/$id")({ component: MarkerLesson });

function mergePlates(accepted: Plate[], builtin: Plate[]): Plate[] {
  const all = [...accepted, ...builtin];
  return all.filter((p, i) => all.findIndex((x) => x.src === p.src) === i);
}

function MarkerLesson() {
  const { id } = Route.useParams();
  const load = useAppStore((s) => s.load);
  const markVisited = useAppStore((s) => s.markVisited);
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const narrator = useAppStore((s) => s.narrator);
  const setNarrator = useAppStore((s) => s.setNarrator);
  const [marker, setMarker] = useState<Marker | undefined>();
  const [accepted, setAccepted] = useState<Plate[]>([]);
  const [playing, setPlaying] = useState(false);
  const [preparing, setPreparing] = useState(false);
  const [hero, setHero] = useState(0);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    let live = true;
    void getMarker(id).then((m) => {
      if (live) setMarker(m);
    });
    void listAcceptedPlates({ data: id })
      .then((rows) => {
        if (live) setAccepted(rows);
      })
      .catch(() => {
        if (live) setAccepted([]);
      });
    return () => {
      live = false;
    };
  }, [id]);

  useEffect(() => {
    if (marker) markVisited(marker.id);
  }, [marker, markVisited]);

  useEffect(() => () => stopSpeaking(), []);
  useEffect(() => setHero(0), [id]);

  if (!marker) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-background text-sm text-muted">
        Loading lesson…
      </main>
    );
  }

  const current = marker;
  const saved = favorites.includes(current.id);
  const text = inscription(current);
  const plates = mergePlates(accepted, platesFor(current));
  const plate = plates[hero] ?? plates[0];

  function toggleAudio() {
    unlockSpeech();
    if (playing || preparing) {
      stopSpeaking();
      setPlaying(false);
      setPreparing(false);
      return;
    }
    setPreparing(true);
    setPlaying(true);
    void playLesson(spokenLesson(current), narrator, () => {
      setPlaying(false);
      setPreparing(false);
    }).then(() => setPreparing(false));
  }

  function chooseNarrator(id: NarratorId) {
    setNarrator(id);
    if (playing || preparing) {
      stopSpeaking();
      setPlaying(false);
      setPreparing(false);
    }
  }

  return (
    <main
      className="min-h-dvh bg-background pb-28"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative">
        <img
          src={plate.src}
          alt={plate.caption ?? ""}
          className="h-64 w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <Link
          to="/"
          className="absolute left-3 top-3 flex size-11 items-center justify-center rounded-lg bg-elevated/90"
          aria-label="Back to map"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <button
          type="button"
          aria-label={saved ? "Remove bookmark" : "Bookmark"}
          onClick={() => toggleFavorite(current.id)}
          className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-lg bg-elevated/90"
        >
          <Bookmark className={cn("size-5", saved && "fill-accent text-accent")} />
        </button>
      </div>

      <header className="px-4 pt-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          {current.id} · {ERA_LABEL[current.era] ?? current.era}
          {current.year ? ` · ${current.year}` : ""}
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium leading-tight tracking-tight">
          {current.name}
        </h1>
        {current.name2 ? (
          <p className="mt-1 font-display text-lg text-muted">{current.name2}</p>
        ) : null}
        <p className="mt-2 flex items-start gap-1.5 text-sm text-muted">
          <MapPin className="mt-0.5 size-4 shrink-0" />
          {[current.addr, current.city, `${current.county} County`]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </header>

      <div className="mt-5 px-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Narrator
        </p>
        <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
          {NARRATORS.map((n) => {
            const on = narrator === n.id;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => chooseNarrator(n.id)}
                className={cn(
                  "h-8 shrink-0 rounded-full border px-3 text-xs font-medium",
                  on
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-subtle text-foreground",
                )}
              >
                {n.name}
              </button>
            );
          })}
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">
          {getNarrator(narrator).blurb}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 px-4">
        <Button onClick={toggleAudio} disabled={preparing && !playing}>
          {playing && !preparing ? (
            <Pause className="size-4" />
          ) : (
            <Volume2 className="size-4" />
          )}
          {preparing ? "Tuning voice…" : playing ? "Stop audio" : "Play lesson"}
        </Button>
        <a href={directionsUrl(current)} target="_blank" rel="noreferrer">
          <Button variant="secondary" className="w-full">
            Directions
          </Button>
        </a>
      </div>

      <article className="px-4 pt-6">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Official inscription
        </h2>
        {current.front ? (
          <p className="mt-3 font-display text-[1.05rem] leading-relaxed text-foreground">
            {current.front}
          </p>
        ) : null}
        {current.back ? (
          <p className="mt-4 font-display text-[1.05rem] leading-relaxed text-foreground">
            {current.back}
          </p>
        ) : null}
        {!text ? (
          <p className="mt-3 text-sm text-muted">No inscription recorded.</p>
        ) : null}
        {current.sponsor ? (
          <p className="mt-5 text-xs text-muted">Sponsored by {current.sponsor}.</p>
        ) : null}
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Inscription from the South Carolina Historical Marker Program, South
          Carolina Department of Archives and History.
        </p>
      </article>

      <section className="mt-8 px-4">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Historical plate
        </h2>
        {plate.caption ? (
          <p className="mt-2 text-sm leading-relaxed">{plate.caption}</p>
        ) : null}
        <p className="mt-1 text-xs leading-relaxed text-muted">{plate.credit}</p>
        {!plate.exact ? (
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Related, not a photograph of this marker’s subject. We do not invent
            faces or scenes.
          </p>
        ) : null}
        {plates.length > 1 ? (
          <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {plates.map((p, i) => (
              <li key={p.src}>
                <button
                  type="button"
                  onClick={() => setHero(i)}
                  className={cn(
                    "size-16 overflow-hidden rounded-md border",
                    i === hero ? "border-accent" : "border-border",
                  )}
                >
                  <img src={p.src} alt="" className="size-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        <SuggestPlate markerId={current.id} />
      </section>
      <BottomNav />
    </main>
  );
}
