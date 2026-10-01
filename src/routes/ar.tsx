import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Pause, ScanLine, Volume2 } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { captureFrame, startRearCamera, stopStream } from "@/lib/camera";
import { isCompleteMarkerId, matchPlaque, normalizeId } from "@/lib/match-plaque";
import { readPlaque } from "@/lib/read-plaque";
import { ERA_LABEL, getMarker, lessonVideo, spokenLesson, type Marker } from "@/lib/markers";
import { playLesson, stopSpeaking, unlockSpeech } from "@/lib/speech";
import { useAppStore } from "@/store/app-store";

type ArSearch = { id?: string };

function cameraFailureCopy(err: unknown): string {
  const name = err instanceof Error ? err.name : "";
  if (name === "NotAllowedError" || name === "PermissionDeniedError") {
    return "Camera access was denied. Allow camera permission in your browser settings, then tap Open camera.";
  }
  return "The camera is unavailable. Check that this device has a camera and that nothing else is using it, then tap Open camera.";
}

export const Route = createFileRoute("/ar")({
  validateSearch: (raw: Record<string, unknown>): ArSearch => ({
    id: typeof raw.id === "string" ? raw.id : undefined,
  }),
  component: ScanPage,
});

function ScanPage() {
  const { id: searchId } = Route.useSearch();
  const load = useAppStore((s) => s.load);
  const markers = useAppStore((s) => s.markers);
  const narrator = useAppStore((s) => s.narrator);

  const liveRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const openingRef = useRef(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [opening, setOpening] = useState(false);
  const [reading, setReading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState<string | undefined>(searchId);
  const [full, setFull] = useState<Marker | undefined>();
  const [locked, setLocked] = useState(Boolean(searchId));
  const [playing, setPlaying] = useState(false);
  const [preparing, setPreparing] = useState(false);

  useEffect(() => {
    void load();
    return () => {
      stopSpeaking();
      stopStream(streamRef.current);
      streamRef.current = null;
    };
    // Camera stays closed until Open camera or the scan control. A timer
    // is not a user gesture, so iOS Safari would reject getUserMedia.
  }, [load]);

  useEffect(() => {
    setPicked(searchId);
    if (searchId) setLocked(true);
  }, [searchId]);

  useEffect(() => {
    if (!picked) {
      setFull(undefined);
      return;
    }
    let live = true;
    void getMarker(picked).then((m) => {
      if (live) setFull(m);
    });
    return () => {
      live = false;
    };
  }, [picked]);

  useEffect(() => {
    if (!cameraOn || locked) return;
    const Detector = (
      window as unknown as {
        BarcodeDetector?: new (opts: { formats: string[] }) => {
          detect: (source: HTMLVideoElement) => Promise<{ rawValue: string }[]>;
        };
      }
    ).BarcodeDetector;
    if (!Detector) return;
    const detector = new Detector({ formats: ["qr_code"] });
    let stop = false;
    const tick = async () => {
      while (!stop) {
        const video = liveRef.current;
        if (video && video.videoWidth > 16) {
          try {
            const codes = await detector.detect(video);
            const raw = codes[0]?.rawValue ?? "";
            const hit = matchPlaque(markers, { id: normalizeId(raw), title: null, raw });
            if (hit) {
              lockMarker(hit.id);
              return;
            }
          } catch {
            /* Safari may throw if the frame isn't ready */
          }
        }
        await new Promise((r) => setTimeout(r, 800));
      }
    };
    void tick();
    return () => {
      stop = true;
    };
  }, [cameraOn, locked, markers]);

  const marker = full ?? markers.find((m) => m.id === picked);

  const hits = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    if (isCompleteMarkerId(q)) {
      const hit = matchPlaque(markers, { id: q, title: null, raw: q });
      return hit ? [hit] : [];
    }
    const needle = q.toLowerCase();
    return markers
      .filter((m) => `${m.id} ${m.name} ${m.city}`.toLowerCase().includes(needle))
      .slice(0, 5);
  }, [query, markers]);

  async function openCamera() {
    const video = liveRef.current;
    if (!video || openingRef.current) return;
    openingRef.current = true;
    setOpening(true);
    setCameraError(null);
    try {
      const stream = await startRearCamera(video);
      streamRef.current = stream;
      setCameraOn(true);
    } catch (err) {
      setCameraError(cameraFailureCopy(err));
    } finally {
      openingRef.current = false;
      setOpening(false);
    }
  }

  function lockMarker(id: string) {
    setPicked(id);
    setLocked(true);
    setQuery("");
    setStatus(null);
    setReading(false);
  }

  async function scanPlaque() {
    const video = liveRef.current;
    if (!video || reading) return;
    if (!cameraOn) {
      await openCamera();
      return;
    }
    if (video.videoWidth < 16) {
      setStatus("Hold on — camera is still starting.");
      return;
    }
    setReading(true);
    setStatus("Reading the plaque…");
    try {
      const image = captureFrame(video);
      const result = await readPlaque({ data: { image } });
      if (!result.ok) {
        setStatus("Couldn’t read that. Fill the frame with the plaque and try again.");
        return;
      }
      const hit = matchPlaque(markers, result);
      if (hit) {
        lockMarker(hit.id);
        return;
      }
      if (result.title) {
        setStatus(`Saw “${result.title}”, but no matching marker. Check the number on the plaque.`);
      } else {
        setStatus("No marker number in view. Aim at SOUTH CAROLINA and the digits (46-21).");
      }
    } catch {
      setStatus("Scan failed. Try again in better light.");
    } finally {
      setReading(false);
    }
  }

  function toggleLesson() {
    if (!marker) return;
    unlockSpeech();
    if (playing || preparing) {
      stopSpeaking();
      setPlaying(false);
      setPreparing(false);
      return;
    }
    setPreparing(true);
    setPlaying(true);
    void playLesson(spokenLesson(marker), narrator, () => {
      setPlaying(false);
      setPreparing(false);
    }).then(() => setPreparing(false));
  }

  function scanAnother() {
    stopSpeaking();
    setPlaying(false);
    setPreparing(false);
    setPicked(undefined);
    setLocked(false);
    setStatus(null);
  }

  const film = marker ? lessonVideo(marker) : null;

  return (
    <main className="relative h-dvh overflow-hidden bg-background">
      <video
        ref={liveRef}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted
        autoPlay
        style={{ opacity: cameraOn && !locked ? 1 : 0 }}
      />

      {locked && film ? (
        <video
          key={film}
          src={film}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          muted
          autoPlay
          loop
        />
      ) : null}

      {!cameraOn && !locked ? <div className="absolute inset-0 bg-subtle" /> : null}
      {cameraOn || locked ? <div className="absolute inset-0 bg-background/15" /> : null}

      {!locked ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-2xl border-2 border-accent/85"
            style={{ width: "min(78vw, 20rem)", height: "min(52vw, 14rem)" }}
          />
        </div>
      ) : null}

      {!locked && !cameraOn ? (
        <div
          className="absolute inset-x-0 z-20 px-5"
          style={{ top: "max(5rem, calc(env(safe-area-inset-top) + 3.5rem))" }}
        >
          <h1 className="font-display text-3xl font-medium tracking-tight">Scan the plaque</h1>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Point at a South Carolina historical marker. We read the number on the sign and open
            that lesson — like a QR code, using the plaque itself.
          </p>
          <Button
            size="lg"
            className="mt-5 w-full"
            onClick={() => void openCamera()}
            disabled={opening}
          >
            <ScanLine className="size-4" />
            {opening ? "Opening camera…" : "Open camera"}
          </Button>
          {cameraError ? (
            <p className="mt-3 text-sm leading-relaxed text-destructive" role="alert">
              {cameraError}
            </p>
          ) : (
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Tap Open camera, then allow access when your browser asks.
            </p>
          )}
        </div>
      ) : null}

      <div
        className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10"
        style={{
          background: "linear-gradient(to top, var(--color-background) 22%, transparent)",
          paddingBottom: "calc(5.5rem + env(safe-area-inset-bottom))",
        }}
      >
        {marker && locked ? (
          <>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {marker.id} · {ERA_LABEL[marker.era] ?? marker.era}
            </p>
            <h2 className="mt-1 font-display text-2xl font-medium leading-tight">{marker.name}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-muted">
              {marker.front || "A South Carolina Historical Marker."}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button onClick={toggleLesson}>
                {playing && !preparing ? (
                  <Pause className="size-4" />
                ) : (
                  <Volume2 className="size-4" />
                )}
                {preparing ? "Tuning…" : playing ? "Stop" : "Play lesson"}
              </Button>
              <Link to="/markers/$id" params={{ id: marker.id }} className="block">
                <Button variant="secondary" className="w-full">
                  <BookOpen className="size-4" />
                  Full lesson
                </Button>
              </Link>
            </div>
            <button
              type="button"
              onClick={scanAnother}
              className="mt-3 w-full py-2 text-center text-xs uppercase tracking-[0.16em] text-muted"
            >
              Scan another marker
            </button>
          </>
        ) : (
          <>
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              {reading
                ? "Reading the plaque"
                : cameraOn
                  ? "Hold the plaque in the frame"
                  : "Or type the number on the sign"}
            </p>
            {status ? (
              <p className="mt-2 text-center text-sm leading-relaxed text-muted">{status}</p>
            ) : null}
            {cameraOn ? (
              <button
                type="button"
                onClick={() => void scanPlaque()}
                disabled={reading}
                className="mx-auto mt-4 flex size-16 items-center justify-center rounded-full border-2 border-foreground bg-foreground/10"
                aria-label="Scan plaque"
              >
                <span className="size-12 rounded-full bg-foreground" />
              </button>
            ) : null}
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Number on the plaque — 46-21"
              className="mt-4 h-11 w-full rounded-lg border border-border bg-elevated px-3 text-sm outline-none placeholder:text-muted"
              autoCapitalize="off"
              autoCorrect="off"
              suppressHydrationWarning
            />
            {hits.length > 0 ? (
              <ul className="mt-2 overflow-hidden rounded-xl border border-border bg-elevated">
                {hits.map((m) => (
                  <li key={m.id} className="border-b border-border last:border-0">
                    <button
                      type="button"
                      onClick={() => lockMarker(m.id)}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-left"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{m.name}</span>
                        <span className="text-xs text-muted">
                          {m.id} · {m.city || m.county}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        )}
      </div>
      <BottomNav />
    </main>
  );
}
