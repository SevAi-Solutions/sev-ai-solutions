'use client'

import { useState } from 'react'
import Link from 'next/link'

type Video = {
  id: string
  title: string
  description: string
  poster?: string
}

const videos: Video[] = [
  {
    id: 'video-1',
    title: 'Inbound lead qualification',
    description:
      'Watch how the AI greets a caller, asks clarifying questions, and qualifies intent before routing.',
  },
  {
    id: 'video-2',
    title: 'Appointment booking flow',
    description:
      'See the AI check availability, confirm details, and book an appointment in real time.',
  },
  {
    id: 'video-3',
    title: 'After-hours call handling',
    description:
      'Demonstration of overflow and after-hours coverage without missed opportunities.',
  },
  {
    id: 'video-4',
    title: 'Human escalation example',
    description:
      'How sensitive or complex calls are escalated to a human with full context.',
  },
  {
    id: 'video-5',
    title: 'Multi-language conversation',
    description:
      'Example of the AI handling a caller in a different language with correct routing.',
  },
  {
    id: 'video-6',
    title: 'High-volume scenario',
    description:
      'Simulated spike in inbound calls handled concurrently with no wait time.',
  },
]

export default function VideosPage() {
  const [active, setActive] = useState<Video | null>(null)

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
                  Video demonstrations
                </h1>
                <p className="mt-6 p-sub max-w-3xl">
                  Short screen recordings showing how SEV AI Solutions handles real-world call scenarios —
                  from lead qualification to booking and escalation.
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

            {/* GRID */}
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActive(v)}
                  className="glass p-6 border-white/15 text-left hover:shadow-[0_0_50px_rgba(34,211,238,0.12)] transition"
                >
                  <div className="aspect-video rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                    <div className="text-sm text-white/60">Video preview</div>
                  </div>

                  <div className="mt-5 text-lg font-semibold">{v.title}</div>
                  <div className="mt-2 text-sm text-white/70 leading-relaxed">
                    {v.description}
                  </div>

                  <div className="mt-4 text-xs text-cyan-300">
                    Click to watch →
                  </div>
                </button>
              ))}
            </div>

            {/* FOOTNOTE */}
            <div className="mt-10 text-xs text-white/50 max-w-3xl">
              Note: These demonstrations represent example scenarios. Actual behavior depends on
              configuration, integrations, and escalation rules.
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-6 glass p-6 border-white/15">
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 text-white/60 hover:text-white"
            >
              ✕
            </button>

            <div className="aspect-video rounded-xl bg-black/60 border border-white/10 flex items-center justify-center">
              <div className="text-white/60 text-sm">
                Video player placeholder
              </div>
            </div>

            <div className="mt-4">
              <div className="text-lg font-semibold">{active.title}</div>
              <div className="mt-2 text-sm text-white/70">{active.description}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}