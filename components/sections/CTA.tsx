import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        {/* ambient cinematic background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-[-10%] h-[32rem] w-[32rem] rounded-full blur-3xl bg-purple-500/14" />
          <div className="absolute -bottom-48 right-[-12%] h-[36rem] w-[36rem] rounded-full blur-3xl bg-cyan-400/14" />
          <div className="absolute inset-0 gridline opacity-15" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/35" />
        </div>

        <div className="relative px-8 py-12 md:px-12 md:py-16">
          {/* Overline */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-white/55">
            <span className="inline-block h-[1px] w-10 bg-white/20" />
            Next step
          </div>

          {/* Headline */}
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            Turn operational pressure into{" "}
            <span className="text-cyan-400">predictable execution</span>.
          </h2>

          {/* Subcopy */}
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
            If your business relies on people to remember, chase, route, or follow up—your operation
            is fragile by default. SEV AI Solutions implements automated workflows that run with
            consistent logic and measurable outcomes.
          </p>

          {/* CTA row */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="/demo" className="btn-primary">
              Request a Demo
            </Link>
            <Link href="/pricing" className="btn-ghost">
              View Pricing
            </Link>
            <a href="tel:+61278044848" className="btn-ghost">
              Call Now
            </a>
          </div>

          {/* reassurance bullets */}
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              {
                k: "No hype. Just implementation.",
                v: "We build what your operation needs.",
              },
              {
                k: "Ownership, not setup.",
                v: "Workflows are monitored and refined.",
              },
              {
                k: "Outcome visibility.",
                v: "Every workflow ends with a recorded result.",
              },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="text-sm font-semibold text-white">{x.k}</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">{x.v}</div>
                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-cyan-400/25 via-purple-500/15 to-transparent" />
              </div>
            ))}
          </div>

          {/* footer note */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <div className="text-[10px] tracking-[0.28em] uppercase text-white/50">
              What happens next
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70">
              We’ll ask a few focused questions to identify where execution breaks down, define what
              the system should own, then propose a workflow plan. If it’s a fit, we implement and
              operate it with ongoing refinement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}