export default function StatsStrip() {
  const stats = [
    {
      k: "Answer rate",
      v: "Every call",
      sub: "24/7/365 coverage with overflow handling",
    },
    {
      k: "Response time",
      v: "< 2 sec",
      sub: "Instant pickup + fast routing to the right path",
    },
    {
      k: "Outcome logging",
      v: "Always",
      sub: "Every call tagged, summarised, and actioned",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-10 md:pb-14">
      <div className="glass border-white/15 p-6 md:p-8 overflow-hidden">
        {/* subtle background accent */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-10%] h-56 w-56 rounded-full blur-3xl bg-cyan-400/15" />
          <div className="absolute -bottom-28 left-[-8%] h-72 w-72 rounded-full blur-3xl bg-purple-500/15" />
          <div className="absolute inset-0 gridline opacity-20" />
        </div>

        <div className="relative flex flex-col gap-5 md:gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="chip">Operations-grade</span>
              <span className="chip">No missed calls</span>
              <span className="chip">Built for handoff</span>
            </div>

            <div className="text-xs text-white/55">
              Designed for teams that can’t afford dropped calls.
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((x) => (
              <div key={x.k} className="glass border-white/15 p-5">
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">
                  {x.k}
                </div>
                <div className="mt-2 text-2xl font-semibold">{x.v}</div>
                <div className="mt-1 text-sm text-white/60">{x.sub}</div>
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}