import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { SiteShell } from "@/components/sublify/SiteShell";

const Lanyard = lazy(() => import("@/components/lanyard/Lanyard"));

const searchSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
});

export const Route = createFileRoute("/lanyard")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Lanyard — Sublify" },
      { name: "description", content: "An interactive 3D lanyard." },
    ],
  }),
  component: LanyardPage,
});

function LanyardPage() {
  const { name, email } = Route.useSearch();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!mounted || !name || !canvasRef.current) return;
    let cancelled = false;
    let stopFn: (() => void) | undefined;

    (async () => {
      const mod = await import("canvas-confetti");
      if (cancelled || !canvasRef.current) return;
      const myConfetti = mod.create(canvasRef.current, {
        resize: true,
        useWorker: false,
      });

      const fire = () => {
        const colors = ["#ffffff", "#f0d78c", "#e85d3a", "#4f46e5", "#2dd4a8"];
        myConfetti({
          particleCount: 90,
          angle: 60,
          spread: 70,
          startVelocity: 55,
          origin: { x: 0, y: 1 },
          colors,
          scalar: 1.1,
          ticks: 220,
        });
        myConfetti({
          particleCount: 90,
          angle: 120,
          spread: 70,
          startVelocity: 55,
          origin: { x: 1, y: 1 },
          colors,
          scalar: 1.1,
          ticks: 220,
        });
      };

      const t1 = window.setTimeout(fire, 1400);
      const t2 = window.setTimeout(fire, 1900);
      const t3 = window.setTimeout(fire, 2500);

      stopFn = () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        myConfetti.reset();
      };
    })();

    return () => {
      cancelled = true;
      stopFn?.();
    };
  }, [mounted, name]);

  return (
    <SiteShell>
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-20">
        <div className="py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            ◆ Interactive
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase leading-[1.05] tracking-[0.02em] sm:text-5xl">
            {name ? "You're in." : "Drag the card."}
          </h1>
          {name ? (
            <p className="mt-2 text-sm text-muted-foreground">Drag your ticket below.</p>
          ) : null}
        </div>
        <div className="relative h-[70vh] w-full overflow-hidden rounded-md border border-border bg-card">
          {mounted ? (
            <Suspense fallback={null}>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} name={name} email={email} />
            </Suspense>
          ) : null}
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </SiteShell>
  );
}
