import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";

export function Onboarding() {
  const setSeenOnboard = useAppStore((s) => s.setSeenOnboard);
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      <img
        src="/images/hero-marker.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div
        className="relative mt-auto flex flex-col gap-5 px-6 pb-10"
        style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          South Carolina
        </p>
        <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground">
          Palmetto Markers
        </h1>
        <p className="max-w-sm text-base leading-relaxed text-muted">
          Every official historical marker in the state, on a map in your pocket.
          Tap a pin for the inscription, a spoken lesson, and a short film from
          a real photograph. Scan a roadside plaque to open that lesson.
        </p>
        <Button size="lg" className="w-full" onClick={setSeenOnboard}>
          Open the atlas
        </Button>
      </div>
    </div>
  );
}
