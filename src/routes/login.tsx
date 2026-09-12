import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";

function safeCallback(raw: string | undefined) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/";
  if (raw === "/login" || raw.startsWith("/login?")) return "/";
  return raw;
}

function onPhone() {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export const Route = createFileRoute("/login")({
  validateSearch: (s: Record<string, unknown>): { next?: string; error?: string } => ({
    next: typeof s.next === "string" ? s.next : undefined,
    error: typeof s.error === "string" ? s.error : undefined,
  }),
  component: Login,
});

function Login() {
  const { next, error } = Route.useSearch();
  const dest = safeCallback(next);
  const { user, isPending } = useCurrentUserState();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(
    error ? "X or Google sent you back unsigned. Try again, or open this in Safari." : null,
  );

  useEffect(() => {
    if (!authEnabled) return;
    void authClient.getSession();
  }, []);

  useEffect(() => {
    if (isPending || !user) return;
    if (typeof window === "undefined") return;
    window.location.replace(dest);
  }, [user, isPending, dest]);

  async function start(providerId: string) {
    if (busy) return;
    setBusy(true);
    setErr(null);
    const errorCallbackURL = `/login?error=oauth&next=${encodeURIComponent(next ?? "/")}`;
    try {
      // iPhone / Grok in-app browser: popups never hand the session back.
      // Same-window redirect keeps X and the return in one WebView.
      if (onPhone()) {
        const { data, error: oauthError } = await authClient.signIn.oauth2({
          providerId,
          callbackURL: dest,
          errorCallbackURL,
        });
        if (oauthError) throw new Error(oauthError.message ?? "Sign-in failed");
        if (data?.url) {
          window.location.assign(data.url);
          return;
        }
        throw new Error("Sign-in failed");
      }
      await signIn(providerId, { callbackURL: dest, errorCallbackURL });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Sign-in failed");
      setBusy(false);
    }
  }

  return (
    <main
      className="grid min-h-dvh place-items-center bg-background px-6"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="w-full max-w-sm">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Palmetto Markers
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight">
          Sign in to contribute
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          The atlas stays open. An account is only for sending a sourced
          historical photograph.
        </p>
        {isPending || user ? (
          <p className="mt-6 text-sm text-muted">
            {user ? "You’re in. Taking you back…" : "Checking your session…"}
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-2">
            {authEnabled ? (
              GROK_PROVIDERS.map((p) => (
                <Button
                  key={p.providerId}
                  variant="secondary"
                  className="w-full"
                  disabled={busy}
                  onClick={() => void start(p.providerId)}
                >
                  {busy ? "Opening…" : `Continue with ${p.label}`}
                </Button>
              ))
            ) : (
              <p className="text-sm text-muted">Sign-in is disabled.</p>
            )}
          </div>
        )}
        {err ? <p className="mt-4 text-sm leading-relaxed text-destructive">{err}</p> : null}
      </div>
    </main>
  );
}
