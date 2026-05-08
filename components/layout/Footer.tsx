import Link from 'next/link'
const LINKS = {
  Learn: [{ label: 'How It Works', href: '/how-it-works' },{ label: 'Whitepaper', href: '/whitepaper' },{ label: 'Tokenomics', href: '/tokenomics' },{ label: 'Glossary', href: '/glossary' },{ label: 'FAQ', href: '/faq' }],
  'Use PNB': [{ label: 'Getting Started', href: '/getting-started' },{ label: 'Buy PNB', href: '/buy-pnb' },{ label: 'Trade PNB', href: '/trade-pnb' },{ label: 'Earn PNB', href: '/earn-pnb' },{ label: 'Download Wallet', href: '/download' }],
  Build: [{ label: 'For Developers', href: '/for-developers' },{ label: 'For Businesses', href: '/for-businesses' },{ label: 'Run a Node', href: '/run-a-node' },{ label: 'Exchanges', href: '/exchanges' }],
  Community: [{ label: 'Community', href: '/community' },{ label: 'Resources', href: '/resources' },{ label: 'Referral', href: '/referral' },{ label: 'Contact', href: '/contact' }],
}
export function Footer() {
  return (
    <footer className="border-t border-pnb-border">
      <div className="container-content section-padding">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-pnb-white hover:text-pnb-gold"><span className="text-pnb-gold">◆</span> PiNeroBase</Link>
            <p className="mt-3 text-xs leading-relaxed text-pnb-muted">Quantum-resistant cryptocurrency.<br/>55.5M PNB — fixed forever.</p>
            <p className="mt-3 text-xs text-pnb-muted">NIST FIPS 204 · ML-DSA-65 · BLAKE3</p>
          </div>
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pnb-muted">{group}</p>
              <ul className="space-y-2">{links.map((l) => (<li key={l.href}><Link href={l.href} className="text-sm text-pnb-muted hover:text-pnb-white">{l.label}</Link></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-pnb-border pt-6 text-xs text-pnb-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} PiNeroBase. All rights reserved.</p>
          <p>Fixed supply: <span className="font-mono text-pnb-gold">55,500,000 PNB</span></p>
        </div>
      </div>
    </footer>
  )
}
