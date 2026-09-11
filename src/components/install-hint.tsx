import { useEffect, useState } from "react";
import { Share, X } from "lucide-react";
import { useAppStore } from "@/store/app-store";

function standalone() {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return (
    nav.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

export function InstallHint() {
  const seen = useAppStore((s) => s.seenInstall);
  const setSeen = useAppStore((s) => s.setSeenInstall);
  const [onHome, setOnHome] = useState(false);

  useEffect(() => {
    setOnHome(standalone());
  }, []);

  if (onHome || seen) return null;

  return (
    <aside className="mx-4 mt-4 rounded-2xl border border-border bg-elevated p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
          On your phone
        </p>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={setSeen}
          className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted"
        >
          <X className="size-4" />
        </button>
      </div>
      <p className="mt-1 font-display text-xl font-medium">Add to Home Screen</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Safari only — not Chrome, not the Grok app. Then Palmetto Markers sits
        next to Maps, camera and all.
      </p>
      <ol className="mt-3 space-y-1.5 text-sm leading-relaxed">
        <li>1. Tap the Share button at the bottom of Safari.</li>
        <li className="flex items-start gap-1">
          2. Scroll and tap{" "}
          <span className="inline-flex items-center gap-1 font-medium text-foreground">
            Add to Home Screen
            <Share className="size-3.5" />
          </span>
        </li>
        <li>3. Tap Add. Open it from the icon, not the browser bar.</li>
      </ol>
    </aside>
  );
}
