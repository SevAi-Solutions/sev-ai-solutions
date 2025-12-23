import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gridline opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="glass p-10 md:p-14 border-white/15">
            <div className="flex items-end justify-between gap-8 flex-wrap">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Terms of Service
                </h1>
                <p className="mt-6 p-sub max-w-3xl">
                  These Terms govern your use of the SEV AI Solutions website and any demo or trial interactions.
                  If you become a client, a separate written agreement may apply.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/privacy" className="btn-ghost">Privacy</Link>
                <Link href="/demo" className="btn-primary">Get an Instant Demo Call</Link>
              </div>
            </div>

            <div className="mt-10 space-y-10 text-white/75 leading-relaxed">
              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">1. About us</h2>
                <p className="mt-3">
                  SEV AI Solutions provides voice AI services and related tooling. Our website may allow you to request
                  a demo call or submit contact information for sales and support.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">2. Demo and trial use</h2>
                <p className="mt-3">
                  Demo calls are provided for evaluation purposes. Functionality may change, and we do not guarantee
                  that demos represent the final production configuration for your business.
                </p>
                <p className="mt-3">
                  You agree not to misuse demo systems (including attempts to disrupt, reverse engineer, scrape,
                  or abuse the service).
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">3. No professional advice</h2>
                <p className="mt-3">
                  Information provided on this website is general and does not constitute legal, financial, medical,
                  or professional advice. You should obtain your own advice for your circumstances.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">4. Acceptable use</h2>
                <p className="mt-3">
                  You must not use our website or demo systems to:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    'violate any law or regulation',
                    'transmit unlawful, harmful, or misleading content',
                    'attempt unauthorised access to systems or data',
                    'interfere with service availability or security',
                    'impersonate another person or misrepresent affiliation'
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-cyan-400/80" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">5. Call recording and consent</h2>
                <p className="mt-3">
                  Where call recording is enabled, recording laws may vary by Australian state/territory.
                  You agree that we may provide disclosures and request consent where appropriate.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">6. Intellectual property</h2>
                <p className="mt-3">
                  We own (or license) the website, branding, and underlying service materials. You may not copy,
                  reproduce, or distribute our content except as permitted by law.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">7. Disclaimers</h2>
                <p className="mt-3">
                  To the extent permitted by law, the website and demo systems are provided “as is”.
                  We do not warrant uninterrupted availability or that the demo will meet your requirements.
                </p>
                <p className="mt-3">
                  Nothing in these Terms excludes, restricts, or modifies consumer guarantees that cannot
                  be excluded under the Australian Consumer Law.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">8. Limitation of liability</h2>
                <p className="mt-3">
                  To the maximum extent permitted by law, we are not liable for indirect or consequential loss,
                  loss of profits, revenue, business interruption, or loss of data arising from your use of the website
                  or demos.
                </p>
                <p className="mt-3 text-white/60 text-sm">
                  If liability cannot be excluded, it is limited to the extent permitted by law.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">9. Changes to these Terms</h2>
                <p className="mt-3">
                  We may update these Terms from time to time by posting a new version on this page.
                </p>
              </section>

              <section className="glass p-7 border-white/15">
                <h2 className="text-2xl font-semibold text-white">10. Contact</h2>
                <p className="mt-3">
                  For questions about these Terms, contact: <span className="text-white">support@yourdomain.com</span> (replace with your real email).
                </p>
                <p className="mt-3 text-xs text-white/50">
                  These Terms are general information and not legal advice. Consider obtaining legal advice for your business.
                </p>
              </section>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/" className="btn-ghost">Back to Home</Link>
              <Link href="/privacy" className="btn-ghost">Read Privacy Policy</Link>
              <Link href="/demo" className="btn-primary">Request a demo call</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}