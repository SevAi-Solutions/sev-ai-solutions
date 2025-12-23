export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} SEV AI Solutions — Enterprise Voice Intelligence
        </div>

        <div className="flex items-center gap-3 text-xs text-white/50 flex-wrap justify-center">
          <span className="chip">HIPAA-ready</span>
          <span className="chip">SOC 2 aligned</span>
          <span className="chip">Encryption at rest & in transit</span>
        </div>
      </div>
    </footer>
  )
}
