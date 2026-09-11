import { createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

function safeNext(raw: string | undefined) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}

export const Route = createFileRoute("/login")({
  validateSearch: (s: Record<string, unknown>) => ({
    next: typeof s.next === "string" ? s.next : undefined,
  }),
  component: Login,
});

function Login() {
  const dest = safeNext(Route.useSearch().next);

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
          historical photograph. Google or X.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                variant="secondary"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: dest })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
      </div>
    </main>
  );
}
