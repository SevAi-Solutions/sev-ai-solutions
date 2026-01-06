"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/integrations", label: "Integrations" },
  { href: "/videos", label: "Video Demos" },
  { href: "/demo", label: "Demo" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-baseline gap-2 select-none">
            <span className="text-lg font-semibold tracking-wide text-white">
              SEV AI
            </span>
            <span className="text-lg font-light tracking-wide text-cyan-400">
              Solutions
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "px-4 py-2 rounded-xl text-sm border transition",
                  pathname === item.href
                    ? "bg-white/10 border-white/15 text-white"
                    : "border-transparent text-white/65 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+61289992555" className="btn-ghost text-sm">
              Call
            </a>
            <Link href="/demo" className="btn-primary text-sm">
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}