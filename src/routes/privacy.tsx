import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Sublify" },
      { name: "description", content: "Sublify privacy policy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">← Back</Link>
      <h1 className="mt-6 font-display text-4xl font-black uppercase tracking-[0.02em]">Privacy</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Coming soon.</p>
    </main>
  );
}
