import Link from 'next/link'

export default function DemoPage() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gridline opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="glass p-10 md:p-14 border-white/15">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Instant <span className="text-cyan-400">AI Demo Call</span>
            </h1>

            <p className="mt-6 p-sub max-w-3xl">
              Experience SEV AI Solutions exactly as your customers would.
              Our AI voice agent will answer, qualify, and route your call in real time.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="glass p-6 border-white/15">
                <h2 className="text-xl font-semibold">What to listen for</h2>
                <ul className="mt-4 space-y-3 text-white/75 text-sm">
                  {[
                    'Natural, human-like pacing and tone',
                    'Context-aware follow-up questions',
                    'Clear appointment booking or routing',
                    'Smooth escalation to a human when required',
                    'Professional, brand-safe language',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-3 flex-wrap">
                  <Link href="/pricing" className="btn-ghost">
                    View Pricing
                  </Link>
                  <Link href="/security" className="btn-ghost">
                    Security & Compliance
                  </Link>
                </div>
              </div>

              <div className="glass p-6 border-white/15">
                <h2 className="text-xl font-semibold">How it works</h2>
                <ol className="mt-4 space-y-3 text-white/75 text-sm list-decimal list-inside">
                  <li>Submit your phone number</li>
                  <li>Our AI calls you instantly</li>
                  <li>It qualifies your request and simulates a real customer flow</li>
                  <li>Hear how it books, routes, or escalates</li>
                </ol>

                <div className="mt-8 p-4 rounded-xl border border-white/15 bg-white/5 text-sm text-white/70">
                  In the next step, we’ll wire this page to the live demo-call form
                  that triggers your AI voice agent automatically.
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/" className="btn-ghost">
                Back to Home
              </Link>
              <Link href="/pricing" className="btn-primary">
                See Pricing Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
