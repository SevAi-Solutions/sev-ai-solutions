export default function StatsStrip() {
  const stats = [
    {
      k: "Workflow ownership",
      v: "End-to-end",
      sub: "From signal → decision → action → logged outcome",
    },
    {
      k: "Decision speed",
      v: "Instant",
      sub: "Events are routed and actioned in real time",
    },
    {
      k: "Outcome logging",
      v: "Always",
      sub: "Completed, routed, escalated, or resolved—recorded",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-10 md:pb-14">
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-8%] h-56 w-56 rounded-full blur-3xl bg-cyan-400/10" />
          <div className="absolute -bottom-28 left-[-10%] h-72 w-72 rounded-full blur-3xl bg-purple-500/10" />
          <div className="absolute inset-0 gridline opacity-15" />
        </div>

        <div className="relative p-7 md:p-9">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div className="text-sm text-white/70">
              Built for operations teams who want execution to be predictable.
            </div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/45">
              AI IMPLEMENTATION • AUTOMATION SYSTEMS
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {stats.map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20"
              >
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">{x.k}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{x.v}</div>
                <div className="mt-2 text-sm text-white/60 leading-relaxed">{x.sub}</div>
                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-cyan-400/25 via-purple-500/15 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}