import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { SiteShell } from "@/components/sublify/SiteShell";

const Lanyard = lazy(() => import("@/components/lanyard/Lanyard"));

export const Route = createFileRoute("/lanyard")({
  head: () => ({
    meta: [
      { title: "Lanyard — Sublify" },
      { name: "description", content: "An interactive 3D lanyard." },
    ],
  }),
  component: LanyardPage,
});

function LanyardPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <SiteShell>
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-20">
        <div className="py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            ◆ Interactive
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase leading-[1.05] tracking-[0.02em] sm:text-5xl">
            Drag the card.
          </h1>
        </div>
        <div className="relative h-[70vh] w-full overflow-hidden rounded-md border border-border bg-card">
          {mounted ? (
            <Suspense fallback={null}>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </Suspense>
          ) : null}
        </div>
      </div>
    </SiteShell>
  );
}
