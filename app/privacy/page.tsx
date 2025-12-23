import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gridline opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="glass p-10 md:p-14 border-white/15">
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Privacy Policy (Australia)
                </h1>
                <p className="mt-6 p-sub max-w-3xl">
                  SEV AI Solutions (“we”, “us”, “our”) is committed to handling personal information in
                  accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs),
                  where applicable.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/terms" className="btn-ghost">Terms</Link>
                <Link href="/demo" className="btn-primary">Get an Instant Demo Call</Link>
              </div>
            </div>

            <div className="mt-10 space-y-10 text-white/75 leading-relaxed">
              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">1. What this policy covers</h2>
                <p className="mt-3">
                  This policy explains how we collect, use, disclose, store, and protect personal information
                  when you visit our website, request a demo, or use our services. It also describes how you can
                  access or correct your personal information.
                </p>
                <p className="mt-3 text-white/60 text-sm">
                  Note: This is a general policy template for our website and demo workflows. If you are a client,
                  your service agreement may include additional privacy/security terms.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">2. Personal information we collect</h2>
                <p className="mt-3">
                  Depending on how you interact with us, we may collect:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    'Identity and contact details (e.g., name, phone number, email address, company name)',
                    'Communication details (e.g., messages you send, demo requests, support requests)',
                    'Call-related information (e.g., call time, call outcome tags, summaries; and if enabled, recordings or transcripts)',
                    'Technical data (e.g., IP address, device/browser information, basic analytics events)'
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-cyan-400/80" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">3. How we collect information</h2>
                <p className="mt-3">
                  We may collect information directly from you (for example, when you submit forms, request a demo call,
                  contact us, or speak with our AI voice agent). We may also collect limited information automatically
                  through standard website technologies.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">4. Why we collect and use it</h2>
                <p className="mt-3">
                  We use personal information for purposes such as:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    'Providing demo calls and responding to enquiries',
                    'Configuring, operating, and improving our voice AI services',
                    'Creating operational summaries and outcomes (e.g., lead capture, appointment requests)',
                    'Security, fraud prevention, and quality assurance',
                    'Meeting legal and regulatory obligations where applicable'
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-purple-400/80" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">5. Call recording and monitoring</h2>
                <p className="mt-3">
                  Some calls may be recorded or monitored for quality assurance, training, and security purposes.
                  Recording laws can vary across Australian states and territories. Where recording is enabled,
                  we recommend that callers are provided with an appropriate disclosure at the start of the call.
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                  Example disclosure: “This call may be recorded or monitored for quality and training purposes.”
                </div>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">6. Disclosure to third parties</h2>
                <p className="mt-3">
                  We may disclose personal information to trusted third-party service providers who help us deliver
                  and operate our services (for example, communications providers, cloud infrastructure, analytics,
                  and automation platforms). We take reasonable steps to ensure providers handle information securely.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">7. Overseas disclosures</h2>
                <p className="mt-3">
                  Some service providers we use may store or process data outside Australia. Where this occurs,
                  we take reasonable steps consistent with APP 8 to ensure overseas recipients handle personal information
                  in a manner consistent with Australian privacy expectations.
                </p>
                <p className="mt-3 text-white/60 text-sm">
                  If you require Australian data residency, ask us about Enterprise deployment options.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">8. Data security and retention</h2>
                <p className="mt-3">
                  We take reasonable steps to protect personal information from misuse, interference, loss,
                  unauthorised access, modification, or disclosure. We retain information only for as long as
                  necessary for the purposes described above (or as required by law), then securely delete or de-identify it.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">9. Access and correction</h2>
                <p className="mt-3">
                  You may request access to, or correction of, personal information we hold about you. We may need
                  to verify your identity before responding. In some cases, we may refuse access as permitted by law.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">10. Complaints</h2>
                <p className="mt-3">
                  If you have a privacy complaint, contact us and we will respond within a reasonable timeframe.
                  If you are not satisfied, you may contact the Office of the Australian Information Commissioner (OAIC).
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">11. Contact</h2>
                <p className="mt-3">
                  Contact us regarding privacy at: <span className="text-white">privacy@yourdomain.com</span> (replace with your real email).
                </p>
                <p className="mt-3 text-xs text-white/50">
                  This policy is general information and not legal advice. Consider obtaining legal advice for your specific
                  deployment and customer base.
                </p>
              </section>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/" className="btn-ghost">Back to Home</Link>
              <Link href="/terms" className="btn-ghost">Read Terms</Link>
              <Link href="/demo" className="btn-primary">Request a demo call</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}