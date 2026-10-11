import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type {
  LessonArt,
  LessonComparePanel,
  LessonNumbersPanel,
  LessonOrderPanel,
  LessonScenePanel,
  LessonTakeawayPanel,
  MarkerLesson,
} from "@/data/lessons/types";
import { cn } from "@/lib/utils";

const LEARNED_KEY = "palmetto-markers-learned";

function readLearned(): string[] {
  try {
    const raw = localStorage.getItem(LEARNED_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function writeLearned(id: string) {
  const next = readLearned();
  if (!next.includes(id)) localStorage.setItem(LEARNED_KEY, JSON.stringify([...next, id]));
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function LessonPlayer({
  lesson,
  directionsHref,
}: {
  lesson: MarkerLesson;
  directionsHref: string;
}) {
  const labelId = useId();
  const scroller = useRef<HTMLDivElement>(null);
  const jump = useRef(false);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [step, setStep] = useState(0);
  const [openHotspot, setOpenHotspot] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const [split, setSplit] = useState(52);
  const [placed, setPlaced] = useState<string[]>([]);
  const [note, setNote] = useState<string | null>(null);
  const [learned, setLearned] = useState(false);
  const panels = lesson.panels;
  const numbers = panels.find((panel): panel is LessonNumbersPanel => panel.kind === "numbers");

  useEffect(() => {
    setLearned(readLearned().includes(lesson.markerId));
  }, [lesson.markerId]);

  useEffect(() => {
    if (!jump.current) return;
    jump.current = false;
    const root = scroller.current;
    if (!root) return;
    const panel = root.children[step] as HTMLElement | undefined;
    panel?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "start",
      block: "nearest",
    });
  }, [step]);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const onScroll = () => {
      const frames = [...root.children] as HTMLElement[];
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < frames.length; i++) {
        const dist = Math.abs(frames[i].offsetLeft - root.scrollLeft);
        if (dist < bestDist) {
          best = i;
          bestDist = dist;
        }
      }
      setStep((current) => (current === best ? current : best));
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (panels[step]?.kind !== "numbers" || !numbers) return;
    if (prefersReducedMotion()) {
      setCount(numbers.value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      setCount(Math.round(numbers.value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [step, panels, numbers]);

  function go(next: number) {
    const clamped = Math.max(0, Math.min(panels.length - 1, next));
    jump.current = true;
    setStep(clamped);
    setOpenHotspot(null);
  }

  function onTimelineKey(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(step + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(step - 1);
    }
  }

  function markLearned() {
    writeLearned(lesson.markerId);
    setLearned(true);
  }

  return (
    <section className="mt-8 border-t border-border px-4 pt-8" aria-labelledby={labelId}>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
        Hands-on lesson
      </p>
      <h2 id={labelId} className="mt-1 font-display text-2xl font-medium tracking-tight">
        {lesson.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.intro}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs text-muted">
          Part {step + 1} of {panels.length}
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => go(step - 1)}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => go(step + 1)}
            disabled={step === panels.length - 1}
          >
            Next
          </Button>
        </div>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-roledescription="timeline"
        aria-label={lesson.timelineLabel}
        onKeyDown={onTimelineKey}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") return;
          const target = event.target as HTMLElement;
          if (target.closest("button, a, input, label")) return;
          const root = scroller.current;
          if (!root) return;
          drag.current = { x: event.clientX, left: root.scrollLeft };
          root.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const root = scroller.current;
          const start = drag.current;
          if (!root || !start) return;
          root.scrollLeft = start.left - (event.clientX - start.x);
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {panels.map((panel) => {
          if (panel.kind === "scene") {
            return (
              <ScenePanel
                key={panel.id}
                scene={panel}
                openId={openHotspot}
                onOpen={setOpenHotspot}
              />
            );
          }
          if (panel.kind === "numbers") {
            return <NumbersPanel key={panel.id} panel={panel} count={count} />;
          }
          if (panel.kind === "compare") {
            return (
              <ComparePanel key={panel.id} panel={panel} split={split} onSplit={setSplit} />
            );
          }
          if (panel.kind === "order") {
            return (
              <TaskPanel
                key={panel.id}
                panel={panel}
                placed={placed}
                note={note}
                onPlace={setPlaced}
                onNote={setNote}
              />
            );
          }
          return (
            <TakeawayPanel
              key={panel.id}
              panel={panel}
              directionsHref={directionsHref}
              learned={learned}
              onLearn={markLearned}
            />
          );
        })}
      </div>

      <ol className="mt-1 flex justify-center" aria-label="Timeline parts">
        {panels.map((panel, index) => (
          <li key={panel.id}>
            <button
              type="button"
              aria-label={`Part ${index + 1}: ${panel.partLabel}`}
              aria-current={index === step ? "step" : undefined}
              onClick={() => go(index)}
              className="flex size-11 items-center justify-center"
            >
              <span
                className={cn(
                  "size-2.5 rounded-full",
                  index === step ? "bg-accent" : "bg-border-strong",
                )}
              />
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-center text-xs text-muted">
        Swipe, or use Back and Next. Left and right arrow keys work when the timeline is focused.
      </p>

      <div className="mt-6">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Sources
        </h3>
        <ul className="mt-2 space-y-2">
          {lesson.sources.map((source) => (
            <li key={source.id} className="text-xs leading-relaxed text-muted">
              {source.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Panel({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="w-full min-w-full shrink-0 snap-start rounded-lg border border-border bg-elevated p-3">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">{kicker}</p>
      <h3 className="mt-1 font-display text-xl font-medium tracking-tight">{title}</h3>
      <div className="mt-3">{children}</div>
    </article>
  );
}

function SceneArt({ art }: { art: LessonArt }) {
  return (
    <img src={art.src} alt={art.label} className="aspect-3/2 h-auto w-full rounded-md object-cover" />
  );
}

function ScenePanel({
  scene,
  openId,
  onOpen,
}: {
  scene: LessonScenePanel;
  openId: string | null;
  onOpen: (id: string | null) => void;
}) {
  const open = scene.hotspots.find((spot) => spot.id === openId) ?? null;
  return (
    <Panel kicker={scene.kicker} title={scene.title}>
      <div className="relative">
        <SceneArt art={scene.art} />
        {scene.hotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            aria-expanded={open?.id === spot.id}
            aria-label={spot.label}
            onClick={() => onOpen(open?.id === spot.id ? null : spot.id)}
            className="absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <span
              className={cn(
                "size-5 rounded-full border-2 border-background bg-foreground",
                open?.id === spot.id && "bg-accent",
              )}
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">Illustration, not a historical photograph.</p>
      {open ? (
        <div className="mt-3 rounded-md border border-border bg-subtle p-3" role="note">
          <p className="text-sm font-medium">{open.label}</p>
          <p className="mt-1 text-sm leading-relaxed">{open.fact}</p>
          <button type="button" className="mt-2 text-xs font-medium text-accent" onClick={() => onOpen(null)}>
            Close
          </button>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted">Tap a dot in the picture.</p>
      )}
    </Panel>
  );
}

function NumbersPanel({ panel, count }: { panel: LessonNumbersPanel; count: number }) {
  return (
    <Panel kicker={panel.kicker} title={panel.title}>
      <div className="rounded-md bg-subtle px-3 py-6 text-center">
        <p
          className={cn(
            "font-display font-medium tabular-nums tracking-tight text-accent",
            String(panel.value).length > 5
              ? "text-4xl"
              : String(panel.value).length > 3
                ? "text-5xl"
                : "text-6xl",
          )}
        >
          {count.toLocaleString("en-US")}
        </p>
        <p className="mt-1 text-sm text-muted">{panel.unit}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed">{panel.meant}</p>
    </Panel>
  );
}

function ComparePanel({
  panel,
  split,
  onSplit,
}: {
  panel: LessonComparePanel;
  split: number;
  onSplit: (value: number) => void;
}) {
  const sliderId = useId();
  return (
    <Panel kicker={panel.kicker} title={panel.title}>
      <div className="relative overflow-hidden rounded-md">
        <SceneArt art={panel.thenArt} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
          <SceneArt art={panel.nowArt} />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-foreground"
          style={{ left: `${split}%` }}
          aria-hidden
        />
      </div>
      <label htmlFor={sliderId} className="mt-3 block text-sm font-medium">
        Drag to compare then and now
      </label>
      <input
        id={sliderId}
        type="range"
        min={8}
        max={92}
        value={split}
        onChange={(event) => onSplit(Number(event.target.value))}
        className="mt-2 h-11 w-full accent-accent"
      />
      <p className="text-xs leading-relaxed text-muted">{panel.thenCaption}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{panel.nowCaption}</p>
    </Panel>
  );
}

function TaskPanel({
  panel,
  placed,
  note,
  onPlace,
  onNote,
}: {
  panel: LessonOrderPanel;
  placed: string[];
  note: string | null;
  onPlace: (ids: string[]) => void;
  onNote: (note: string | null) => void;
}) {
  const done = placed.length === panel.events.length;

  function choose(id: string) {
    if (placed.includes(id)) return;
    const expected = panel.events[placed.length];
    const picked = panel.events.find((event) => event.id === id);
    if (!expected || !picked) return;
    if (picked.id !== expected.id) {
      onNote(`Not yet. Next on the marker is ${expected.year}: ${expected.label}`);
      return;
    }
    onPlace([...placed, id]);
    onNote(picked.why);
  }

  return (
    <Panel kicker={panel.kicker} title={panel.title}>
      <p className="text-sm leading-relaxed text-muted">{panel.prompt}</p>
      <ol className="mt-3 space-y-2" aria-label="Your order">
        {panel.events.map((event, index) => {
          const id = placed[index];
          const chosen = panel.events.find((item) => item.id === id);
          return (
            <li
              key={event.id}
              className="flex min-h-11 items-center rounded-md border border-border bg-subtle px-3 text-sm"
            >
              {chosen ? (
                <span>
                  <span className="text-accent">{chosen.year}. </span>
                  {chosen.label}
                </span>
              ) : (
                <span className="text-muted">Waiting for event {index + 1}</span>
              )}
            </li>
          );
        })}
      </ol>
      {note ? (
        <p className="mt-3 text-sm leading-relaxed" role="status">
          {note}
        </p>
      ) : null}
      <div className="mt-3 flex flex-col gap-2">
        {panel.offer.map((id) => {
          const event = panel.events.find((item) => item.id === id);
          if (!event || placed.includes(id)) return null;
          return (
            <Button
              key={id}
              type="button"
              variant="secondary"
              className="h-auto min-h-11 w-full justify-start whitespace-normal py-2 text-left"
              onClick={() => choose(id)}
            >
              <span className="text-accent">{event.year}.</span> {event.label}
            </Button>
          );
        })}
      </div>
      {done ? <p className="mt-2 text-sm font-medium text-accent">{panel.doneLine}</p> : null}
      {placed.length > 0 ? (
        <button
          type="button"
          className="mt-3 text-xs font-medium text-muted"
          onClick={() => {
            onPlace([]);
            onNote(null);
          }}
        >
          Start this order over
        </button>
      ) : null}
    </Panel>
  );
}

function TakeawayPanel({
  panel,
  directionsHref,
  learned,
  onLearn,
}: {
  panel: LessonTakeawayPanel;
  directionsHref: string;
  learned: boolean;
  onLearn: () => void;
}) {
  return (
    <Panel kicker={panel.kicker} title={panel.title}>
      <ol className="space-y-3">
        {panel.lines.map((line, index) => (
          <li key={line} className="text-sm leading-relaxed">
            <span className="mr-2 font-medium text-accent">{index + 1}.</span>
            {line}
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-col gap-2">
        <a href={directionsHref} target="_blank" rel="noreferrer">
          <Button variant="secondary" className="w-full">
            Directions to the marker
          </Button>
        </a>
        <Button type="button" onClick={onLearn} disabled={learned}>
          {learned ? "Marked as learned" : "Mark as learned"}
        </Button>
      </div>
    </Panel>
  );
}
