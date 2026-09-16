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
      return;
    } catch {
      // fall through to the legacy path
    }
    try {
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      const ok = document.execCommand("copy");
      el.remove();
      setState(ok ? "copied" : "failed");
    } catch {
      setState("failed");
    }
  }

  const label =
    state === "copied" ? "Copied" : state === "failed" ? "Could not copy" : "Copy address";

  return (
    <Button type="button" variant="secondary" onClick={copy} aria-live="polite">
      {label}
    </Button>
  );
}
