'use client'
import Link from 'next/link'
import { useState } from 'react'
const NAV = [
  { label: 'Learn', items: [{ label: 'How It Works', href: '/how-it-works' },{ label: 'Whitepaper', href: '/whitepaper' },{ label: 'Tokenomics', href: '/tokenomics' },{ label: 'Glossary', href: '/glossary' },{ label: 'FAQ', href: '/faq' }] },
  { label: 'Use PNB', items: [{ label: 'Getting Started', href: '/getting-started' },{ label: 'Buy PNB', href: '/buy-pnb' },{ label: 'Trade PNB', href: '/trade-pnb' },{ label: 'Earn PNB', href: '/earn-pnb' },{ label: 'Download Wallet', href: '/download' }] },
  { label: 'Build', items: [{ label: 'For Developers', href: '/for-developers' },{ label: 'For Businesses', href: '/for-businesses' },{ label: 'Run a Node', href: '/run-a-node' },{ label: 'Exchanges', href: '/exchanges' }] },
  { label: 'Community', items: [{ label: 'Community', href: '/community' },{ label: 'Referral', href: '/referral' },{ label: 'Resources', href: '/resources' },{ label: 'Contact', href: '/contact' }] },
]
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  return (
    <nav className="sticky top-0 z-50 border-b border-pnb-border bg-pnb-black/90 backdrop-blur-md">
      <div className="container-content flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-pnb-white hover:text-pnb-gold"><span className="text-pnb-gold">◆</span> PiNeroBase</Link>
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((g) => (
            <div key={g.label} className="relative" onMouseEnter={() => setActive(g.label)} onMouseLeave={() => setActive(null)}>
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-pnb-muted hover:text-pnb-white">{g.label}</button>
              {active === g.label && (
                <div className="absolute left-0 top-full min-w-[180px] rounded-lg border border-pnb-border bg-pnb-surface p-1 shadow-xl">
                  {g.items.map((i) => (<Link key={i.href} href={i.href} className="block rounded-md px-3 py-2 text-sm text-pnb-muted hover:bg-pnb-border hover:text-pnb-white">{i.label}</Link>))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="text-sm text-pnb-muted hover:text-pnb-white">Contact</Link>
          <Link href="/download" className="btn-primary text-xs">Get Wallet</Link>
        </div>
        <button className="flex items-center p-2 text-pnb-muted md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">{open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-pnb-border px-4 pb-4 md:hidden">
          {NAV.map((g) => (<div key={g.label} className="mt-4"><p className="mb-1 text-xs font-semibold uppercase tracking-widest text-pnb-muted">{g.label}</p>{g.items.map((i) => (<Link key={i.href} href={i.href} className="block py-2 text-sm text-pnb-white" onClick={() => setOpen(false)}>{i.label}</Link>))}</div>))}
          <div className="mt-6"><Link href="/download" className="btn-primary block text-center">Get Wallet</Link></div>
        </div>
      )}
    </nav>
  )
}
