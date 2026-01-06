import Link from "next/link";

export default function HowWeWork() {
  const phases = [
    {
      n: "01",
      title: "Discovery (pressure points)",
      desc:
        "We identify where execution breaks down—handoffs, follow-ups, approvals, routing, and decision friction. Then we define what SEV will own end-to-end.",
      tags: ["Operational mapping", "Ownership boundaries", "Risk & escalation rules"],
    },
    {
      n: "02",
      title: "Design (workflow blueprint)",
      desc:
        "We translate your reality into a workflow design: inputs, decisions, actions, outcomes, and edge-case handling—so the system behaves consistently under pressure.",
      tags: ["Decision logic", "Data flow", "Outcome states"],
    },
    {
      n: "03",
      title: "Implementation (build + validation)",
      desc:
        "We implement the workflow across your systems, test it end-to-end, and validate with real scenarios. Nothing goes live until outcomes are reliable.",
      tags: ["End-to-end testing", "Quality gates", "Rollback-safe deployment"],
    },
    {
      n: "04",
      title: "Operate (monitor + refine)",
      desc:
        "We monitor outcomes and refine behavior as conditions change—volume, edge-cases, policy updates, and priorities—so execution stays stable over time.",
      tags: ["Outcome logging", "Continuous refinement", "Clean escalation to humans"],
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-14 md:pb-20">
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
        {/* ambient depth */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-[12%] h-80 w-80 rounded-full blur-3xl bg-purple-500/10" />
          <div className="absolute -bottom-32 right-[10%] h-96 w-96 rounded-full blur-3xl bg-cyan-400/10" />
          <div className="absolute inset-0 gridline opacity-15" />
        </div>

        <div className="relative p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-white/55">
                How we work
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
                Done-for-you implementation with{" "}
                <span className="text-cyan-400">ongoing ownership</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70 max-w-3xl">
                You don’t need to become an AI expert. We implement automated workflows around your
                operation, validate outcomes, and keep the system reliable as your business evolves.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/demo" className="btn-primary">
                Request a Demo
              </Link>
              <Link href="/security" className="btn-ghost">
                Security & Compliance
              </Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10 grid gap-4">
            {phases.map((p, idx) => (
              <div
                key={p.n}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-8 transition hover:border-white/20"
              >
                {/* left rail */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/25 via-cyan-400/25 to-transparent opacity-70" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
                      Phase {p.n}
                    </div>
                    <div className="mt-3 text-xl md:text-2xl font-semibold text-white">
                      {p.title}
                    </div>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
                      {p.desc}
                    </p>
                  </div>

                  <div className="lg:w-[360px]">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
                      Included
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* connector hint */}
                {idx < phases.length - 1 && (
                  <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-[1px] bg-gradient-to-b from-white/25 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
              What we protect you from
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
              Random breakdowns. Partial automations. Unowned edge-cases. “It worked last month.”
              SEV implements workflows with ownership and outcome visibility—so operations stay stable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}