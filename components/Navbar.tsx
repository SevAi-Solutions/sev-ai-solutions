'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/security', label: 'Security' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/videos', label: 'Video Demos' },
  { href: '/demo', label: 'Instant Demo' },
]

const legal = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="group flex items-baseline gap-2 select-none">
          <span className="text-lg font-semibold tracking-wide text-white">SEV AI</span>
          <span className="text-lg font-light tracking-wide text-cyan-400">Solutions</span>
        </Link>

        <div className="hidden lg:flex items-center gap-3">
          {/* Main nav */}
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'px-4 py-2 rounded-xl text-sm transition border',
                  pathname === item.href
                    ? 'bg-white/10 border-white/15 text-white'
                    : 'border-transparent text-white/70 hover:text-white hover:bg-white/5',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-6 w-px bg-white/15" />

          {/* Legal links */}
          <nav className="flex items-center gap-1">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'px-3 py-2 rounded-xl text-sm transition border',
                  pathname === item.href
                    ? 'bg-white/10 border-white/15 text-white'
                    : 'border-transparent text-white/60 hover:text-white hover:bg-white/5',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/demo" className="btn-primary text-sm">
          Get Demo Call
        </Link>
      </div>
    </header>
  )
}
