import { useEffect, useState } from "react";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "That doesn't look like a valid email" })
  .max(255);

const STORAGE_KEY = "sublify:waitlist";

type Entry = { email: string; joinedAt: string };

function readList(): Entry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Entry[]) : [];
  } catch {
    return [];
  }
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(readList().length);
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    const list = readList();
    const normalized = parsed.data.toLowerCase();
    const existingIdx = list.findIndex((e) => e.email === normalized);
    if (existingIdx >= 0) {
      setError(null);
      setPosition(existingIdx + 1);
      return;
    }
    const next: Entry[] = [
      ...list,
      { email: normalized, joinedAt: new Date().toISOString() },
    ];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setError(null);
    setPosition(next.length);
    setCount(next.length);
    setEmail("");
  }

  if (position !== null) {
    return (
      <div className="rise rounded border border-foreground/15 bg-card p-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Confirmed · No. {String(position).padStart(4, "0")}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">
          You're on the list.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll write to you the moment Sublify opens its doors. Until then —
          stop bleeding money on forgotten trials.
        </p>
        <button
          onClick={() => setPosition(null)}
          className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground underline underline-offset-4 hover:no-underline"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          maxLength={255}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="your@inbox.com"
          aria-label="Email address"
          className="flex-1 rounded border border-foreground/20 bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
        />
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-transform hover:-translate-y-0.5"
        >
          Request access
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>{error ?? "No spam. One email when we launch."}</span>
        <span>{count.toString().padStart(4, "0")} on list</span>
      </div>
    </form>
  );
}
