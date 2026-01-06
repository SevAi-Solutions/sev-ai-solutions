import Link from "next/link";

export default function Proof() {
  const pillars = [
    {
      title: "Designed for operations that can’t fail",
      desc: "Every call gets an outcome: resolved, routed, booked, or escalated—with context preserved.",
    },
    {
      title: "Works across industries",
      desc: "From trades and property to clinics and enterprise supply—SEV adapts to your workflow, not the other way around.",
    },
    {
      title: "Integration-ready by default",
      desc: "Connect to CRMs, calendars, ticketing, and internal tools—so outcomes turn into actions automatically.",
    },
  ];

  const signals = [
    "Call outcome logging (summary + tags)",
    "Policy-driven escalation to humans",
    "After-hours + overflow coverage",
    "Compliance-aware prompts and routing",
    "Structured capture for follow-up",
    "Workflow automation beyond calls",
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-12 md:pb-16">
      <div className="glass border-white/15 p-8 md:p-10 overflow-hidden">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-[10%] h-72 w-72 rounded-full blur-3xl bg-purple-500/12" />
          <div className="absolute -bottom-28 right-[8%] h-72 w-72 rounded-full blur-3xl bg-cyan-400/12" />
          <div className="absolute inset-0 gridline opacity-20" />
        </div>

        <div className="relative">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-white/55">
                Proof of capability
              </div>
              <h2 className="mt-3 h2">
                Authority you can hear <span className="text-cyan-400">on the first call</span>
              </h2>
              <p className="mt-4 p-sub max-w-3xl">
                This isn’t “a chatbot that talks.” SEV is an AI-operated workflow layer that
                answers, qualifies, routes, and records outcomes—so your operations don’t rely on luck.
              </p>
            </div>

            <div className="mt-5 md:mt-0 flex gap-3">
              <Link href="/demo" className="btn-primary">
                Try the Demo Call
              </Link>
              <Link href="/integrations" className="btn-ghost">
                See Integrations
              </Link>
            </div>
          </div>

          {/* capability cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="glass border-white/15 p-6">
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</p>
                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />
              </div>
            ))}
          </div>

          {/* “Signals” list */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="glass border-white/15 p-6">
              <div className="text-sm font-semibold">What you get immediately</div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {signals.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400/80" />
                    <span className="text-sm text-white/70">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border-white/15 p-6">
              <div className="text-sm font-semibold">What makes SEV different</div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Most “voice AI” stops at conversations. SEV exists to take responsibility for the
                execution of business operations that cannot afford to fail.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="glass border-white/10 p-4">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">
                    Outcome-first
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Every call ends with a clear next step: booked, routed, resolved, or escalated.
                  </div>
                </div>
                <div className="glass border-white/10 p-4">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">
                    Workflow ownership
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    We don’t just answer calls—we build the automations behind them.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-white/50 leading-relaxed">
                Next step: once you have real client logos/testimonials, we’ll add a “Trusted by” strip.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}