import { lazy, Suspense, useEffect, useState } from "react";
import { z } from "zod";

const loadLanyard = () => import("@/components/lanyard/Lanyard");
const Lanyard = lazy(loadLanyard);

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .max(80),
  email: z
    .string()
    .trim()
    .email({ message: "That doesn't look like a valid email" })
    .max(255),
});

const STORAGE_KEY = "sublify:waitlist";

type Entry = { name: string; email: string; joinedAt: string };

function readList(): Entry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Entry[]) : [];
  } catch {
    return [];
  }
}

type Ticket = { position: number; name: string; email: string };

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(readList().length);
    // Warm up the heavy 3D chunk so the lanyard appears instantly on submit.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    schedule(() => {
      void loadLanyard();
    });
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    const list = readList();
    const normalized = parsed.data.email.toLowerCase();
    const existingIdx = list.findIndex((e) => e.email === normalized);
    if (existingIdx >= 0) {
      setError(null);
      setTicket({ position: existingIdx + 1, name: list[existingIdx].name, email: normalized });
      return;
    }
    const next: Entry[] = [
      ...list,
      {
        name: parsed.data.name,
        email: normalized,
        joinedAt: new Date().toISOString(),
      },
    ];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setError(null);
    setTicket({ position: next.length, name: parsed.data.name, email: normalized });
    setCount(next.length);
    setName("");
    setEmail("");
  }

  if (ticket !== null) {
    return (
      <div className="rise rounded border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Ticket · No. {String(ticket.position).padStart(4, "0")}
          </p>
          <button
            onClick={() => setTicket(null)}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground underline underline-offset-4 hover:text-foreground hover:no-underline"
          >
            Claim another
          </button>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
          You're in.
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Drag your ticket below.
        </p>
        <div className="relative mt-4 h-[420px] w-full overflow-hidden rounded">
          <Suspense
            fallback={
              <div className="flex h-full w-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Printing your ticket…
              </div>
            }
          >
            <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} name={ticket.name} email={ticket.email} />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          required
          maxLength={80}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
          maxLength={255}
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
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background shadow-[0_0_0_0_rgba(255,255,255,0)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] active:translate-y-0 active:scale-[0.98] active:duration-75"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          <span className="relative">Claim your ticket</span>
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
