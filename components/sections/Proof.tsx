import Link from "next/link";

export default function Proof() {
  const pillars = [
    {
      title: "AI implementation, not AI features",
      desc:
        "We translate your business process into an AI-driven workflow that makes consistent decisions and executes reliably.",
    },
    {
      title: "Workflows that don’t rely on humans as glue",
      desc:
        "No more manual chasing or fragile handoffs. The workflow routes, updates, assigns, and escalates with clear ownership.",
    },
    {
      title: "Outcome-first accountability",
      desc:
        "Every workflow ends with a recorded result—completed, routed, escalated, or resolved—so leadership has visibility.",
    },
  ];

  const examples = [
    {
      k: "Operational intake",
      v: "Signal → decision → action",
      sub: "Requests are validated, routed, and completed without manual coordination.",
    },
    {
      k: "Sales operations",
      v: "Lead → qualified → assigned",
      sub: "Leads are assessed, enriched, assigned, and followed up—automatically.",
    },
    {
      k: "Support resolution",
      v: "Ticket → triage → outcome",
      sub: "Issues are categorized, prioritized, and escalated only when needed.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-14 md:pb-20">
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-[10%] h-72 w-72 rounded-full blur-3xl bg-purple-500/10" />
          <div className="absolute -bottom-28 right-[8%] h-72 w-72 rounded-full blur-3xl bg-cyan-400/10" />
          <div className="absolute inset-0 gridline opacity-15" />
        </div>

        <div className="relative p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-white/55">
                Capability • Proof
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
                Automation you can trust from{" "}
                <span className="text-cyan-400">first execution</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70 max-w-3xl">
                SEV AI Solutions implements automated workflows that run your operation the way a
                disciplined team would—consistent decisions, clean routing, and measurable outcomes.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/demo" className="btn-primary">
                Request a Demo
              </Link>
              <Link href="/security" className="btn-ghost">
                Security
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20"
              >
                <div className="text-base font-semibold text-white">{p.title}</div>
                <div className="mt-3 text-sm leading-relaxed text-white/65">{p.desc}</div>
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-400/25 via-purple-500/15 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {examples.map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">{x.k}</div>
                <div className="mt-2 text-lg font-semibold text-white">{x.v}</div>
                <div className="mt-2 text-sm text-white/60 leading-relaxed">{x.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
              The difference
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
              Most providers deliver “automation setups.” SEV delivers workflow implementation with
              ownership—so execution becomes predictable, measurable, and resilient under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}