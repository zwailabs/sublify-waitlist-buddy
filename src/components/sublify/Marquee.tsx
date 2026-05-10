const items = [
  "Trial ending · Figma",
  "Renewal · Adobe",
  "Cash flow audit",
  "Hidden charge detected",
  "Daily reminder · 9:00",
  "Annual review",
  "Calendar synced",
  "Receipts captured",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground/15 bg-paper-deep/40 py-3">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{t}</span>
            <span aria-hidden>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
