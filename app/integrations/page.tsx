'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

type Category = 'CRM' | 'Calendar' | 'Automation' | 'Helpdesk' | 'Analytics' | 'Comms' | 'Data'
type Status = 'Native' | 'Webhook' | 'Roadmap'

type Integration = {
  name: string
  category: Category
  status: Status
  summary: string
}

const statusStyle = (s: Status) => {
  if (s === 'Native') return 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200'
  if (s === 'Webhook') return 'border-purple-500/25 bg-purple-500/10 text-purple-200'
  return 'border-white/15 bg-white/5 text-white/70'
}

export default function IntegrationsPage() {
  const integrations: Integration[] = useMemo(
    () => [
      { name: 'HubSpot', category: 'CRM', status: 'Native', summary: 'Create/Update contacts, log call outcomes, push qualified leads.' },
      { name: 'Salesforce', category: 'CRM', status: 'Roadmap', summary: 'Enterprise pipeline integration for lead creation and activity logging.' },
      { name: 'Zoho CRM', category: 'CRM', status: 'Webhook', summary: 'Connect via webhook automation for lead creation and updates.' },
      { name: 'Pipedrive', category: 'CRM', status: 'Roadmap', summary: 'Pipeline + activity logging aligned with sales workflows.' },

      { name: 'Google Calendar', category: 'Calendar', status: 'Native', summary: 'Book appointments, check availability, confirm bookings.' },
      { name: 'Calendly', category: 'Calendar', status: 'Webhook', summary: 'Trigger scheduling flows and confirmations via automation.' },
      { name: 'Microsoft Outlook', category: 'Calendar', status: 'Roadmap', summary: 'Enterprise calendaring workflows and booking policies.' },

      { name: 'Make (Integromat)', category: 'Automation', status: 'Native', summary: 'Fast automation for CRM, email, ticketing, spreadsheets, and custom endpoints.' },
      { name: 'Zapier', category: 'Automation', status: 'Roadmap', summary: 'Broad app connectivity for lightweight workflows.' },

      { name: 'Zendesk', category: 'Helpdesk', status: 'Roadmap', summary: 'Create tickets for support calls and route escalation requests.' },
      { name: 'Freshdesk', category: 'Helpdesk', status: 'Webhook', summary: 'Ticket creation and routing via automation.' },

      { name: 'GA4', category: 'Analytics', status: 'Roadmap', summary: 'Event instrumentation for lead attribution and web-to-call flows.' },
      { name: 'Looker Studio', category: 'Analytics', status: 'Webhook', summary: 'Export call outcomes and reporting datasets for dashboards.' },

      { name: 'Twilio', category: 'Comms', status: 'Native', summary: 'Telephony layer for call handling, routing, and delivery.' },
      { name: 'SMS/Email Summaries', category: 'Comms', status: 'Native', summary: 'Send post-call summaries and notifications to your team.' },

      { name: 'Google Sheets', category: 'Data', status: 'Webhook', summary: 'Log leads/outcomes to spreadsheets for ops and reporting.' },
      { name: 'Webhooks / Custom API', category: 'Data', status: 'Native', summary: 'If it has an API endpoint, we can push structured events and payloads.' },
    ],
    []
  )

  const categories = useMemo(
    () => ['All', 'CRM', 'Calendar', 'Automation', 'Helpdesk', 'Analytics', 'Comms', 'Data'] as const,
    []
  )
  const statuses = useMemo(() => ['All', 'Native', 'Webhook', 'Roadmap'] as const, [])

  const [cat, setCat] = useState<(typeof categories)[number]>('All')
  const [stat, setStat] = useState<(typeof statuses)[number]>('All')

  const filtered = integrations.filter((i) => {
    const okCat = cat === 'All' ? true : i.category === cat
    const okStat = stat === 'All' ? true : i.status === stat
    return okCat && okStat
  })

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
                  Integrations
                </h1>
                <p className="mt-6 p-sub max-w-3xl">
                  SEV AI Solutions connects into your revenue and operations stack so phone conversations become
                  structured outcomes: leads, bookings, tickets, and logged dispositions.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/demo" className="btn-primary">
                  Get an Instant Demo Call
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  Pricing
                </Link>
              </div>
            </div>

            {/* ENTERPRISE FRAMING */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  k: 'Outcome-first',
                  v: 'We log intent, disposition, and next steps—so calls turn into trackable workflow events.',
                },
                {
                  k: 'Workflow alignment',
                  v: 'Integrations are configured around your lead lifecycle: qualify → book → route → follow up.',
                },
                {
                  k: 'Flexible connectivity',
                  v: 'Native connectors + webhook automation. If your system has an API, we can integrate it.',
                },
              ].map((x) => (
                <div key={x.k} className="glass p-7 border-white/15">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">{x.k}</div>
                  <div className="mt-3 text-sm text-white/75 leading-relaxed">{x.v}</div>
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />
                  <div className="mt-4 text-xs text-white/45">
                    Exact availability depends on your systems and scope.
                  </div>
                </div>
              ))}
            </div>

            {/* FILTERS */}
            <div className="mt-12 glass p-6 border-white/15">
              <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={[
                        'rounded-full px-4 py-2 text-sm border transition',
                        cat === c
                          ? 'border-cyan-400/35 bg-cyan-400/10 text-white'
                          : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10',
                      ].join(' ')}
                      type="button"
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-white/50 uppercase tracking-[0.22em]">Status</span>
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStat(s)}
                      className={[
                        'rounded-full px-4 py-2 text-sm border transition',
                        stat === s
                          ? 'border-purple-500/35 bg-purple-500/10 text-white'
                          : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10',
                      ].join(' ')}
                      type="button"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 text-sm text-white/60">
                Showing <span className="text-white/80 font-semibold">{filtered.length}</span> integration options.
              </div>
            </div>

            {/* INTEGRATIONS GRID */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((i) => (
                <div
                  key={`${i.name}-${i.category}-${i.status}`}
                  className="glass p-6 border-white/15 hover:shadow-[0_0_50px_rgba(168,85,247,0.12)] transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                        {i.category}
                      </div>
                      <div className="mt-1 text-lg font-semibold">{i.name}</div>
                    </div>

                    <span className={['text-xs border rounded-full px-3 py-1', statusStyle(i.status)].join(' ')}>
                      {i.status}
                    </span>
                  </div>

                  <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-cyan-400/35 via-purple-500/25 to-transparent" />

                  <div className="mt-4 text-sm text-white/70 leading-relaxed">
                    {i.summary}
                  </div>

                  <div className="mt-5 text-xs text-white/45">
                    Ask us to confirm your exact stack during onboarding.
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-12 glass p-8 border-white/15">
              <h2 className="text-2xl font-semibold">Need a specific integration?</h2>
              <p className="mt-3 text-white/70 max-w-3xl">
                Early adopters can request priority connectors. We’ll map the integration to your lead lifecycle
                and reporting requirements—so every call produces a usable outcome.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/demo" className="btn-primary">
                  Request a demo call
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  View packages
                </Link>
              </div>

              <div className="mt-6 text-xs text-white/45">
                Note: “Native / Webhook / Roadmap” indicates integration approach, not a guarantee of immediate availability for every system configuration.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
