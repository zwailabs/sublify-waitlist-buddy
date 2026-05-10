import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/sublify/WaitlistForm";
import { LedgerCard } from "@/components/sublify/LedgerCard";
import { Marquee } from "@/components/sublify/Marquee";

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
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-2">
          <SublifyMark />
          <span className="font-display text-lg font-semibold tracking-tight">Sublify</span>
        </div>
        <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
          <span>Est. MMXXVI</span>
          <span>Private beta</span>
        </div>
        <a
          href="#waitlist"
          className="rounded border border-foreground/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Join waitlist
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-foreground" />
              <span>Issue 001 — The subscription problem</span>
            </div>

            <h1 className="rise mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[5.5rem]">
              Stop bleeding
              <br />
              money on
              <br />
              <span className="italic">forgotten</span> trials.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sublify is an elite financial auditor that tracks every
              subscription, analyzes your recurring cash flow and arms you with
              a high-fidelity calendar so a $9.99 charge never sneaks past you
              again.
            </p>

            <div id="waitlist" className="mt-10 max-w-xl">
              <WaitlistForm />
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-foreground/15 pt-6">
              <Stat k="Avg. waste / yr" v="$348" />
              <Stat k="Trials caught" v="98%" />
              <Stat k="Setup time" v="< 2 min" />
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="sticky top-10">
              <LedgerCard />
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                ◆ Live preview · not your real data
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              § 02 — The system
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Three moves.
              <br />
              Total clarity.
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              We built Sublify around the belief that your money deserves an
              auditor as serious as you are.
            </p>
          </div>

          <div className="grid gap-px bg-foreground/10 lg:col-span-8 lg:grid-cols-3">
            <Step
              n="01"
              title="Detect"
              body="Connect your inbox or card. Sublify uncovers every recurring charge — even the ones you forgot existed."
            />
            <Step
              n="02"
              title="Audit"
              body="See cash flow by month, by category, by stupid impulse from 2023. We surface the leaks, you decide."
            />
            <Step
              n="03"
              title="Defend"
              body="High-fidelity calendar + smart daily reminders. Cancel before the trial bites. Renew on your terms."
            />
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-y border-foreground/15 bg-paper-deep/50">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            ◆ Manifesto
          </p>
          <p className="mt-6 font-display text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            “The average person spends{" "}
            <span className="italic">$219 a month</span> on subscriptions and
            can name maybe four of them. Sublify exists so you stop paying for
            services you stopped loving.”
          </p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            — Wayne, founder
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          § 04 — Early access
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Be in the first hundred.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          We're letting people in slowly, in batches. Join the list and we'll
          send a single, considered email when your seat is ready.
        </p>
        <div className="mx-auto mt-10 max-w-lg">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row lg:px-10">
          <div className="flex items-center gap-2">
            <SublifyMark small />
            <span>Sublify © {new Date().getFullYear()}</span>
          </div>
          <span className="blink">Pre-launch · v0.1</span>
          <span>Built with intention</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dd className="font-display text-2xl font-semibold text-foreground">{v}</dd>
      <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {k}
      </dt>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="bg-background p-8 transition-colors hover:bg-paper-deep/60">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Step {n}
      </p>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function SublifyMark({ small = false }: { small?: boolean }) {
  const size = small ? 18 : 26;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 20c1.6 1.5 4 2.4 6.5 2.4 3 0 5-1.2 5-3 0-4.5-11-2.6-11-7.4 0-1.8 2-3 5-3 2.5 0 4.9 1 6.5 2.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
