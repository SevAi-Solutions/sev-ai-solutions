export default function StatsStrip() {
  return (
    <section className="relative border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { k: "Coverage", v: "24/7/365" },
            { k: "Missed Calls", v: "0%" },
            { k: "Handoffs", v: "Clean & Logged" },
            { k: "Response Time", v: "< 1s" },
          ].map((item) => (
            <div
              key={item.k}
              className="glass p-6 border-white/10"
            >
              <div className="text-xs tracking-widest uppercase text-white/50">
                {item.k}
              </div>
              <div className="mt-2 text-2xl font-semibold text-cyan-400">
                {item.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
