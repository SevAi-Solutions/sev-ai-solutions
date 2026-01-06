import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(900px_600px_at_80%_30%,rgba(168,85,247,0.10),transparent_55%)]" />
        <div className="absolute inset-0 gridline opacity-20" />
        <div className="absolute -top-44 left-1/2 -translate-x-1/2 h-[32rem] w-[72rem] max-w-[120vw] rounded-full blur-3xl bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-14">
        {/* tiny overline */}
        <div className="flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-white/55">
          <span className="inline-block h-[1px] w-10 bg-white/20" />
          AI IMPLEMENTATION • AUTOMATED WORKFLOWS
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
          SEV AI <span className="text-cyan-400">Solutions</span>
          <span className="text-white/85"> builds operational workflows that</span>{" "}
          <span className="text-white">run.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-white/70">
          We implement AI-driven workflows across your business systems—so work is routed, completed,
          escalated, and logged with consistent logic. No fragile handoffs. No manual chasing.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link href="/demo" className="btn-primary">
            Request a Demo
          </Link>
          <Link href="/pricing" className="btn-ghost">
            See How It Works
          </Link>
        </div>

        {/* subtle credibility row (minimal, not “chips everywhere”) */}
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            { k: "Implementation", v: "Done-for-you", sub: "Designed around your operation" },
            { k: "Execution", v: "Outcome-driven", sub: "Every workflow ends with a next step" },
            { k: "Ownership", v: "Ongoing", sub: "Refined as your business evolves" },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <div className="text-[10px] tracking-[0.22em] uppercase text-white/50">
                {x.k}
              </div>
              <div className="mt-2 text-lg font-semibold text-white">{x.v}</div>
              <div className="mt-1 text-sm text-white/60">{x.sub}</div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-cyan-400/25 via-purple-500/15 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}