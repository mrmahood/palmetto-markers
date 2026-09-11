import { Link } from "@tanstack/react-router";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AuthChip({ next }: { next?: string }) {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="size-11 shrink-0 animate-pulse rounded-lg bg-elevated" />;
  }
  if (user) {
    return (
      <div className="max-w-[9.5rem] overflow-hidden">
        <UserButton />
      </div>
    );
  }
  return (
    <Link
      to="/login"
      search={{ next: next ?? "/" }}
      className="flex h-11 shrink-0 items-center rounded-lg border border-border bg-elevated px-3 text-xs font-medium"
    >
      Sign in
    </Link>
  );
}
