import Link from 'next/link'

const pillars = [
  {
    title: 'HIPAA-ready deployments',
    body:
      'Designed to support regulated workflows with controlled handling of sensitive information, escalation rules, and configurable data minimization.',
  },
  {
    title: 'SOC 2 aligned practices',
    body:
      'Operational controls aligned to common SOC 2 expectations: access control, change management, logging, and incident response readiness.',
  },
  {
    title: 'Encryption in transit & at rest',
    body:
      'Transport security (TLS) and encryption at rest for stored artifacts where applicable, with configurable retention policies.',
  },
  {
    title: 'Least-privilege access',
    body:
      'Role-based access patterns and environment separation options for teams and vendors to reduce unnecessary exposure.',
  },
  {
    title: 'Audit-friendly logging',
    body:
      'Call outcome tagging and structured logs designed for QA, compliance reviews, and operational visibility.',
  },
  {
    title: 'Policy-based human handoff',
    body:
      'Escalation policies ensure sensitive, complex, or high-risk scenarios route to humans with context—without forcing automation.',
  },
]

const assurances = [
  {
    k: 'Data handling',
    v: 'Configurable retention + minimization options for operational fit.',
  },
  {
    k: 'Governance',
    v: 'Clear escalation policies, QA review workflows, and change control patterns.',
  },
  {
    k: 'Reliability',
    v: 'Designed for consistent call handling and standardized outcomes across teams.',
  },
]

export default function SecurityPage() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gridline opacity-25" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="glass p-10 md:p-14 border-white/15">
            {/* HEADER */}
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Security & compliance
                </h1>
                <p className="mt-6 p-sub max-w-3xl">
                  SEV AI Solutions is built for businesses that need reliability, governance, and operational visibility.
                  We support security review workflows and regulated deployments—without sacrificing customer experience.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/demo" className="btn-primary">
                  Get an Instant Demo Call
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  View pricing
                </Link>
              </div>
            </div>

            {/* QUICK ASSURANCES */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {assurances.map((a) => (
                <div key={a.k} className="glass p-7 border-white/15">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">{a.k}</div>
                  <div className="mt-3 text-white/80 text-sm leading-relaxed">{a.v}</div>
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />
                  <div className="mt-4 text-xs text-white/45">
                    Enterprise note: exact controls vary by scope and configuration.
                  </div>
                </div>
              ))}
            </div>

            {/* PILLARS */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold">Security posture</h2>
              <p className="mt-3 text-white/70 max-w-3xl">
                These pillars communicate how we approach security and compliance in a way that supports buyer expectations and
                procurement review.
              </p>

              <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pillars.map((p) => (
                  <div key={p.title} className="glass p-7 border-white/15">
                    <div className="text-lg font-semibold">{p.title}</div>
                    <div className="mt-3 text-sm text-white/70 leading-relaxed">{p.body}</div>
                    <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />
                    <div className="mt-4 text-xs text-white/45">
                      Available details provided during security review for qualified buyers.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROCUREMENT / REVIEW */}
            <div className="mt-12 glass p-8 border-white/15">
              <h2 className="text-2xl font-semibold">Enterprise review support</h2>
              <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
                For regulated organizations or security-conscious teams, we can support a review process with documentation,
                deployment constraints, and audit-friendly configuration options. Choose Enterprise for advanced controls and SLAs.
              </p>

              <div className="mt-7 grid md:grid-cols-3 gap-4 text-sm text-white/75">
                {[
                  { k: 'Security questionnaire', v: 'We support common vendor review workflows.' },
                  { k: 'Access controls', v: 'Least-privilege patterns and role-based options.' },
                  { k: 'Logging & QA', v: 'Outcome tagging designed for oversight and improvement.' },
                ].map((x) => (
                  <div key={x.k} className="glass p-6 border-white/15">
                    <div className="font-semibold">{x.k}</div>
                    <div className="mt-2 text-white/70">{x.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/demo" className="btn-primary">
                  Request a demo call
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  See Enterprise tier
                </Link>
              </div>

              <div className="mt-6 text-xs text-white/45 leading-relaxed">
                Disclaimer: “HIPAA-ready” and “SOC 2 aligned” refer to deployment patterns and operational controls; final compliance depends on your
                environment, configuration, and internal policies.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
