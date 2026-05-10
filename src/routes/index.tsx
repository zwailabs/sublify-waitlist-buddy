import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { WaitlistForm } from "@/components/sublify/WaitlistForm";

const IMAGES = Array.from({ length: 24 }, (_, i) =>
  `https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/ALPHAS%20(${i + 1}).png`,
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sublify — The financial auditor for your subscriptions" },
      {
        name: "description",
        content:
          "Sublify intelligently tracks your subscriptions, audits recurring cash flow and protects your wallet from forgotten trials. Join the waitlist.",
      },
      { property: "og:title", content: "Sublify — Stop bleeding money on forgotten trials" },
      {
        property: "og:description",
        content: "An elite financial auditor for the subscriptions running your life.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const heroImage = useMemo(
    () => IMAGES[Math.floor(Math.random() * IMAGES.length)],
    [],
  );

  return (
    <main className="relative flex min-h-screen flex-col bg-background text-foreground">
      {/* Side rails */}
      <div aria-hidden className="pointer-events-none fixed inset-y-0 left-2 z-10 w-px bg-border sm:left-6 lg:left-10" />
      <div aria-hidden className="pointer-events-none fixed inset-y-0 right-2 z-10 w-px bg-border sm:right-6 lg:right-10" />
      {/* Top navbar */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
          <div className="flex items-center gap-2">
            <SublifyMark />
          </div>
          <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
            <span>Est. 2026</span>
            <span className="blink">Private beta</span>
          </div>
          <a
            href="#waitlist"
            className="rounded border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Join waitlist
          </a>
        </div>
      </header>

      {/* Body — split */}
      <section className="flex-1">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-8 sm:px-8 sm:py-12 lg:grid-cols-12 lg:gap-14 lg:px-20 lg:py-16">
          {/* Left — image */}
          <div className="rise relative mx-auto w-full max-w-[800px] overflow-hidden rounded-md border border-border bg-card lg:col-span-7" style={{ aspectRatio: "800 / 600" }}>
            <img
              src={heroImage}
              alt="Sublify preview"
              className="absolute inset-0 h-full w-full object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">
              ◆ The feeling after downloading Sublify
            </p>
          </div>

          {/* Right — form */}
          <div id="waitlist" className="w-full max-w-md justify-self-start px-0 py-2 text-left sm:p-8 lg:col-span-5 lg:p-10">
            <h1 className="font-display text-2xl font-black uppercase leading-[1.05] tracking-[0.02em] sm:text-4xl lg:text-5xl">
              Claim your ticket.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Drop your name and email — we'll send a single, considered note
              the moment Sublify opens its doors.
            </p>

            <div className="mt-8">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:px-6 sm:text-left lg:px-10">
          <div className="flex items-center gap-2">
            <SublifyMark small />
            <span>Sublify © {new Date().getFullYear()}</span>
          </div>
          <span className="blink">Pre-launch · v1.2.9</span>
          <span>Crafted with love by ZW &amp; AI</span>
        </div>
      </footer>
    </main>
  );
}

function SublifyMark({ small = false }: { small?: boolean }) {
  const size = small ? 28 : 56;
  return (
    <img
      src="https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/Applogo.png"
      alt="Sublify logo"
      width={size}
      height={size}
      className="rounded"
      style={{ width: size, height: size }}
    />
  );
}
