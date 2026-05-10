type Row = { name: string; cycle: string; amount: string; flag?: string };

const rows: Row[] = [
  { name: "Adobe Creative Cloud", cycle: "Monthly · 14th", amount: "$54.99" },
  { name: "Notion AI", cycle: "Monthly · 22nd", amount: "$10.00" },
  { name: "Figma Organization", cycle: "Annual · Mar 03", amount: "$540.00", flag: "Trial ends in 2d" },
  { name: "iCloud+ 2TB", cycle: "Monthly · 8th", amount: "$9.99" },
  { name: "Spotify Family", cycle: "Monthly · 19th", amount: "$16.99" },
  { name: "Linear Plus", cycle: "Monthly · 27th", amount: "$8.00", flag: "Renews in 3d" },
];

export function LedgerCard() {
  return (
    <div className="grain relative overflow-hidden rounded-md border border-foreground/15 bg-card shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-foreground/70" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Sublify · Ledger
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          May 2026
        </span>
      </div>

      <div className="grid grid-cols-12 gap-4 border-b border-foreground/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="col-span-6">Subscription</span>
        <span className="col-span-4">Cycle</span>
        <span className="col-span-2 text-right">Cost</span>
      </div>

      <ul className="divide-y divide-foreground/10">
        {rows.map((r) => (
          <li
            key={r.name}
            className="grid grid-cols-12 gap-4 px-5 py-4 text-sm transition-colors hover:bg-paper-deep/60"
          >
            <div className="col-span-6">
              <p className="font-medium text-foreground">{r.name}</p>
              {r.flag ? (
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                  ◆ {r.flag}
                </p>
              ) : null}
            </div>
            <p className="col-span-4 self-center font-mono text-xs text-muted-foreground">
              {r.cycle}
            </p>
            <p className="col-span-2 self-center text-right font-mono text-sm text-foreground">
              {r.amount}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-foreground/15 bg-paper-deep/50 px-5 py-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Monthly outflow
          </p>
          <p className="font-display text-2xl font-semibold text-foreground">$144.97</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Saved this quarter
          </p>
          <p className="font-display text-2xl font-semibold text-foreground">$312.40</p>
        </div>
      </div>
    </div>
  );
}
