import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const loadLanyard = () => import("@/components/lanyard/Lanyard");

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .max(22),
  email: z
    .string()
    .trim()
    .email({ message: "That doesn't look like a valid email" }),
});

export function WaitlistForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  async function refreshCount() {
    const { data, error: rpcError } = await supabase.rpc("get_waitlist_count");
    if (!rpcError && typeof data === "number") setCount(data);
  }

  useEffect(() => {
    void refreshCount();
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    schedule(() => {
      void loadLanyard();
    });
  }, []);

  function goToTicket(ticketName: string, ticketEmail: string) {
    navigate({ to: "/lanyard", search: { name: ticketName, email: ticketEmail } });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    const cleanEmail = parsed.data.email.toLowerCase();
    const cleanName = parsed.data.name;

    setSubmitting(true);
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ name: cleanName, email: cleanEmail });
    setSubmitting(false);

    if (insertError) {
      // Duplicate email — still take them to their ticket
      if (insertError.code === "23505") {
        setError(null);
        goToTicket(cleanName, cleanEmail);
        return;
      }
      setError("Something went wrong. Please try again.");
      return;
    }

    setError(null);
    setName("");
    setEmail("");
    void refreshCount();
    goToTicket(cleanName, cleanEmail);
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          required
          maxLength={22}
          value={name}
          onChange={(e) => {
            setName(e.target.value.slice(0, 22));
            if (error) setError(null);
          }}
          placeholder="Your name"
          aria-label="Name"
          id="waitlist-name"
          className="w-full rounded border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="your@inbox.com"
          aria-label="Email address"
          className="w-full rounded border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background shadow-[0_0_0_0_rgba(255,255,255,0)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] active:translate-y-0 active:scale-[0.98] active:duration-75 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          <span className="relative">{submitting ? "Claiming..." : "Claim your ticket"}</span>
          <span className="relative transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>{error ?? "No spam. One email when we launch."}</span>
        <span>{count.toString().padStart(4, "0")} on list</span>
      </div>
    </form>
  );
}
