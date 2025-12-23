import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 gridline opacity-25" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[70rem] max-w-[95vw] rounded-full blur-3xl bg-gradient-to-r from-purple-500/25 via-cyan-400/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="glass p-10 md:p-14 border-white/15">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="chip">Enterprise-grade</span>
              <span className="chip">24/7/365 coverage</span>
              <span className="chip">Human handoff</span>
              <span className="chip">Outcome logging</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              SEV AI <span className="text-cyan-400">Solutions</span>
              <span className="text-white"> — AI Voice Workforce</span>
            </h1>

            <p className="mt-6 p-sub max-w-3xl">
              Deploy intelligent voice agents that answer every call, qualify leads, book appointments,
              and escalate intelligently. Built for enterprise operations, compliance, and revenue teams.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/demo" className="btn-primary">
                Get an Instant Demo Call
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing
              </Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { k: 'Coverage', v: '24/7/365', sub: 'Overflow + after-hours' },
                { k: 'Handling', v: 'Policy-driven', sub: 'Escalate when needed' },
                { k: 'Outcomes', v: 'Logged', sub: 'CRM + reporting-ready' },
              ].map((x) => (
                <div key={x.k} className="glass p-5 border-white/15">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">
                    {x.k}
                  </div>
                  <div className="mt-2 text-lg font-semibold">{x.v}</div>
                  <div className="mt-1 text-xs text-white/55">{x.sub}</div>
                  <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />
                </div>
              ))}
            </div>

            <div className="mt-8 text-xs text-white/50 leading-relaxed">
              Next: we’ll add the remaining pages (Demo, Pricing, Security, Integrations, Videos) and the HUD effects.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
