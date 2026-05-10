import { useEffect, useState } from "react";

export type TOCItem = { id: string; label: string };

export function SectionTOC({ items }: { items: TOCItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        });
        if (visible.size > 0) {
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setActive(top);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    observers.push(obs);

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav aria-label="On this page" className="flex flex-col gap-3">
      <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
        On this page
      </p>
      <ul className="flex flex-col gap-2.5">
        {items.map((it, i) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(it.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group flex items-center gap-3"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-10 bg-foreground"
                      : "w-5 bg-border group-hover:w-7 group-hover:bg-muted-foreground"
                  }`}
                />
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} · {it.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
