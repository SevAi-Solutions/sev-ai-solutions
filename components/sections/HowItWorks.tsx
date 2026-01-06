import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Map the execution surface",
      desc:
        "We identify where work breaks down—handoffs, follow-ups, approvals, routing, and operational decisions. Then we define what the system owns end-to-end.",
      bullets: ["Ownership boundaries", "Decision rules", "Escalation conditions"],
    },
    {
      n: "02",
      title: "Implement the workflow",
      desc:
        "We implement an AI-driven workflow that can interpret inputs, apply your business logic, and trigger actions across your systems—without fragile manual coordination.",
      bullets: ["Intake → triage", "Routing → action", "System updates + notifications"],
    },
    {
      n: "03",
      title: "Operate and refine",
      desc:
        "Workflows are monitored and iterated as real conditions change—volume, edge-cases, priorities, and policy. Execution becomes predictable and measurable.",
      bullets: ["Outcome logging", "Continuous refinement", "Clean human escalation"],
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-14 md:pb-20">
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
        {/* ambient depth */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 right-[12%] h-80 w-80 rounded-full blur-3xl bg-cyan-400/10" />
          <div className="absolute -bottom-32 left-[10%] h-96 w-96 rounded-full blur-3xl bg-purple-500/10" />
          <div className="absolute inset-0 gridline opacity-15" />
        </div>

        <div className="relative p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-white/55">
                How it works
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
                From process pressure to{" "}
                <span className="text-cyan-400">predictable execution</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70 max-w-3xl">
                We don’t start with “features.” We start with responsibility—then implement automated
                workflows that make consistent decisions, take action, and log outcomes.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/demo" className="btn-primary">
                Request a Demo
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-10 grid gap-4">
            {steps.map((s, idx) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-8 transition hover:border-white/20"
              >
                {/* step rail */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/30 via-purple-500/20 to-transparent opacity-70" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
                      Step {s.n}
                    </div>
                    <div className="mt-3 text-xl md:text-2xl font-semibold text-white">
                      {s.title}
                    </div>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
                      {s.desc}
                    </p>
                  </div>

                  <div className="md:w-[320px]">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
                      Output
                    </div>
                    <div className="mt-4 grid gap-3">
                      {s.bullets.map((b) => (
                        <div
                          key={b}
                          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                        >
                          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400/80 align-middle" />
                          <span className="align-middle">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* connector hint (subtle) */}
                {idx < steps.length - 1 && (
                  <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-[1px] bg-gradient-to-b from-white/25 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom reassurance */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
              What this means for your team
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
              Your people stop acting as glue between systems. Work stops falling through cracks.
              Execution becomes consistent—and when human judgment is needed, escalation is clean and
              contextual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}