import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { WaitlistForm } from "@/components/sublify/WaitlistForm";

const IMAGES = [
  "https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/1.jpg",
  "https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/2.jpg",
  "https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/3.jpg",
  "https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/4.jpg",
  "https://ginfumybqtwwiglisfwd.supabase.co/storage/v1/object/public/SUBLIFY%20WEB%20IMGS/5.jpg",
];

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
      <div aria-hidden className="pointer-events-none fixed inset-y-0 left-6 z-10 w-px bg-border lg:left-10" />
      <div aria-hidden className="pointer-events-none fixed inset-y-0 right-6 z-10 w-px bg-border lg:right-10" />
      {/* Top navbar */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-2">
            <SublifyMark />
          </div>
          <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
            <span>Est. MMXXVI</span>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
          {/* Left — image */}
          <div className="rise relative w-full overflow-hidden rounded-md border border-border bg-card">
            <img
              src={heroImage}
              alt="Sublify preview"
              className="h-auto w-full object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">
              ◆ Vol. 0{IMAGES.indexOf(heroImage) + 1} / {IMAGES.length}
            </p>
          </div>

          {/* Right — form */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              § 001 — Early access
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Stop bleeding money on{" "}
              <span className="italic text-muted-foreground">forgotten</span>{" "}
              trials.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Sublify is an elite financial auditor that tracks every
              subscription, audits your recurring cash flow and arms you with a
              high-fidelity calendar — so a $9.99 charge never sneaks past you
              again.
            </p>

            <div id="waitlist" className="mt-10 max-w-md">
              <WaitlistForm />
            </div>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              ◆ One email when we launch · No spam, ever
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row lg:px-10">
          <div className="flex items-center gap-2">
            <SublifyMark small />
            <span>Sublify © {new Date().getFullYear()}</span>
          </div>
          <span className="blink">Pre-launch · v0.1</span>
          <span>Built with intention by Wayne</span>
        </div>
      </footer>
    </main>
  );
}

function SublifyMark({ small = false }: { small?: boolean }) {
  const size = small ? 22 : 32;
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
