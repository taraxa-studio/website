import * as React from "react";
import { Button } from "@/components/ui/button";

type State = "idle" | "copied" | "failed";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = React.useState<State>("idle");

  React.useEffect(() => {
    if (state === "idle") return;
    const t = window.setTimeout(() => setState("idle"), 1800);
    return () => window.clearTimeout(t);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  const label =
    state === "copied" ? "Copied" : state === "failed" ? "Could not copy" : "Copy address";

  return (
    <Button
      type="button"
      variant="outline"
      onClick={copy}
      aria-live="polite"
      className="h-11 rounded-full px-5 text-sm font-medium"
    >
      {label}
    </Button>
  );
}
