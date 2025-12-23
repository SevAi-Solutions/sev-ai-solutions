import Link from 'next/link'

const includedEveryPlan = [
  'Natural, human-like voice experience',
  'Configurable call routing rules',
  'Outcome logging (caller intent + summary)',
  'Human handoff for sensitive or complex calls',
  'Onboarding configuration and tuning',
]

const tiers = [
  {
    name: 'Starter — After-hours & Overflow',
    price: 'From $499 / month',
    who: 'Small businesses wanting to stop missed calls after-hours or during peak overflow without replacing existing staff.',
    typical: 'Typical capacity: ~100–200 calls/month (guideline)',
    included: [
      'AI receptionist answers calls during specified hours',
      'Handles basic FAQs',
      'Captures caller details (name, number, reason)',
      'Sends call summaries and notifications',
      'Basic routing or voicemail fallback',
    ],
    key: 'Prove value with minimal risk, then scale when ready.',
    cta: 'Try the demo call',
  },
  {
    name: 'Standard — Full Reception Coverage',
    price: 'From $1,499 / month',
    who: 'Established businesses ready to significantly reduce receptionist workload and capture every inbound opportunity.',
    typical: 'Typical capacity: ~300–500 calls/month (guideline)',
    included: [
      '24/7 AI receptionist coverage',
      'Appointment booking integration',
      'Comprehensive FAQ handling',
      'Transfers to specific staff or teams',
      'CRM or calendar integration',
      'Custom voice and tone configuration',
      'Basic reporting and performance visibility',
    ],
    key: 'Full receptionist capability at a fraction of hiring cost.',
    featured: true,
    cta: 'Get an instant demo call',
  },
  {
    name: 'Enterprise — Custom & Scaled',
    price: 'Custom',
    who: 'Multi-location businesses, high call volume teams, or organizations with complex routing, integrations, or compliance needs.',
    typical: 'Volume and scope priced after discovery',
    included: [
      'Everything in Standard',
      'Multi-location and multi-department support',
      'Advanced integrations (ticketing, payments, APIs)',
      'Multi-language support',
      'Priority setup and support',
      'High-volume or unlimited call options',
      'Custom conversation flows',
      'Ongoing optimization and QA',
      'Dedicated account management',
    ],
    key: 'Enterprise-grade phone automation built around your workflows.',
    cta: 'Talk to sales',
  },
]

const addOns = [
  {
    title: 'Additional phone numbers',
    desc: 'Add dedicated numbers for locations, departments, or campaigns.',
  },
  {
    title: 'Enhanced analytics',
    desc: 'Deeper insight into call patterns, FAQs, lead quality, and conversions.',
  },
  {
    title: 'Custom integrations',
    desc: 'Connect SEV AI Solutions to internal tools, CRMs, ticketing, or payments.',
  },
  {
    title: 'Multi-language support',
    desc: 'Handle callers in multiple languages with consistent routing and tone.',
  },
  {
    title: 'Voice cloning (optional)',
    desc: 'Create a voice aligned with your brand or team, where approved.',
  },
  {
    title: 'Additional location rollout',
    desc: 'Scale standardized call handling across new offices or franchises.',
  },
]

export default function PricingPage() {
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
                  Pricing & service packages
                </h1>
                <p className="mt-6 p-sub max-w-3xl">
                  Three coverage tiers designed to match how businesses actually adopt AI reception —
                  start with reliability, then scale capability and integrations.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/demo" className="btn-primary">
                  Get an Instant Demo Call
                </Link>
                <Link href="/security" className="btn-ghost">
                  Security & Compliance
                </Link>
              </div>
            </div>

            {/* INCLUDED IN EVERY PLAN */}
            <div className="mt-10 glass p-7 border-white/15">
              <div className="text-sm text-white/60 uppercase tracking-[0.2em]">
                Included in every plan
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-white/75">
                {includedEveryPlan.map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-400/80" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TIERS */}
            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={[
                    'glass p-7 border-white/15',
                    t.featured
                      ? 'border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.15)]'
                      : '',
                  ].join(' ')}
                >
                  {t.featured && (
                    <div className="chip text-xs mb-4 w-fit">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      Most teams choose this
                    </div>
                  )}

                  <div className="text-lg font-semibold">{t.name}</div>
                  <div className="mt-2 text-3xl font-bold">{t.price}</div>

                  <div className="mt-5 text-sm text-white/70">
                    <strong className="text-white">Who it’s for:</strong> {t.who}
                  </div>

                  <div className="mt-3 text-xs text-white/50">{t.typical}</div>

                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />

                  <ul className="mt-6 space-y-3 text-sm text-white/75">
                    {t.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-white/80">{t.key}</div>
                  </div>

                  <div className="mt-7">
                    <Link href="/demo" className={t.featured ? 'btn-primary w-full' : 'btn-ghost w-full'}>
                      {t.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* COMPARISON */}
            <div className="mt-16 glass p-8 border-white/15">
              <h2 className="text-2xl font-semibold">
                Traditional Receptionist vs SEV AI Receptionist
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm border border-white/10">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="p-4 text-left">Capability</th>
                      <th className="p-4 text-left">Traditional Receptionist</th>
                      <th className="p-4 text-left text-cyan-400">SEV AI Receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Availability', 'Business hours only', '24/7/365'],
                      ['Missed calls', 'Common during peaks', 'None by design'],
                      ['Scalability', 'Limited by staffing', 'Instant and elastic'],
                      ['Cost structure', 'Salary + overhead', 'Predictable monthly fee'],
                      ['Consistency', 'Varies by staff', 'Always on-brand'],
                      ['Call volume spikes', 'Causes wait times', 'Handled automatically'],
                      ['Handoff to humans', 'Manual', 'Rule-based with context'],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        {row.map((cell, i) => (
                          <td key={i} className="p-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ADD-ONS */}
            <div className="mt-16 glass p-8 border-white/15">
              <h2 className="text-2xl font-semibold">Add-on modules</h2>
              <p className="mt-3 text-white/70 max-w-3xl">
                Extend capability without changing your base tier.
              </p>

              <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {addOns.map((a) => (
                  <div key={a.title} className="glass p-6 border-white/15">
                    <div className="font-semibold">{a.title}</div>
                    <div className="mt-2 text-sm text-white/70">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-xs text-white/50">
              Pricing may vary based on call volume, integrations, and compliance requirements.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}