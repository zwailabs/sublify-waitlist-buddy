import { useEffect, useState } from "react";

export type TOCItem = { id: string; label: string };

export function SectionTOC({
  items,
  onFocusChange,
}: {
  items: TOCItem[];
  onFocusChange?: (focused: boolean) => void;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    let ticking = false;
    const compute = () => {
      ticking = false;
      const scrollBottom = window.innerHeight + window.scrollY;
      if (scrollBottom >= document.documentElement.scrollHeight - 4) {
        setActive(items[items.length - 1].id);
        return;
      }
      const probe = window.innerHeight * 0.3;
      let current = items[0]?.id ?? "";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - probe <= 0) current = it.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="flex flex-col gap-3"
      onMouseEnter={() => onFocusChange?.(true)}
      onMouseLeave={() => onFocusChange?.(false)}
      onFocus={() => onFocusChange?.(true)}
      onBlur={() => onFocusChange?.(false)}
    >
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
