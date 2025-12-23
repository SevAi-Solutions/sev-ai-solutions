import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'SEV AI Solutions — Enterprise Voice AI Workforce',
  description:
    'Deploy enterprise-grade AI voice agents that answer every call, qualify leads, book appointments, and escalate intelligently—24/7/365.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-void text-white min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
