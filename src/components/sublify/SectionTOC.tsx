import { useEffect, useState } from "react";

export type TOCItem = { id: string; label: string };

export function SectionTOC({ items }: { items: TOCItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const compute = () => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // If we've scrolled to (near) the bottom, the last section wins —
      // it can't otherwise reach the upper-third of the viewport.
      if (scrollY + viewportH >= docH - 4) {
        setActive(items[items.length - 1]?.id ?? "");
        return;
      }

      const probe = scrollY + viewportH * 0.3;
      let current = items[0]?.id ?? "";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= probe) current = it.id;
        else break;
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
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
                  className={`text-[10px] uppercase tracking-[0.22em] transition-colors duration-200 ${
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
