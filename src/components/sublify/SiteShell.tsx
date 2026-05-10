import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

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

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-y-0 left-2 z-10 w-px bg-border sm:left-6 lg:left-10" />
      <div aria-hidden className="pointer-events-none fixed inset-y-0 right-2 z-10 w-px bg-border sm:right-6 lg:right-10" />

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <SublifyMark />
          </Link>
          <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
            <span>Est. 2026</span>
            <span className="blink">Private beta</span>
          </div>
          <Link
            to="/"
            className="rounded border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background active:scale-[0.97]"
          >
            Join waitlist
          </Link>
        </div>
      </header>

      <section className="flex-1">{children}</section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:px-6 lg:px-10">
          <div className="flex flex-col items-center gap-3 text-center sm:grid sm:grid-cols-3 sm:items-center sm:text-left">
            <div className="flex items-center gap-2 sm:justify-self-start">
              <SublifyMark small />
              <span>Sublify © {new Date().getFullYear()}</span>
            </div>
            <span className="blink sm:justify-self-center sm:text-center">Pre-launch · v1.2.9</span>
            <span className="sm:justify-self-end sm:text-right">Built with love by ZW &amp; AI</span>
          </div>
          <nav className="flex items-center justify-center gap-8 pt-2">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/support" className="hover:text-foreground">Support</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
