import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'PiNeroBase Coin (PNB) — Quantum-resistant cryptocurrency' }
const STATS = [
  { label: 'Fixed Supply', value: '55.5M PNB', note: 'Inviolable cap' },
  { label: 'Signature Scheme', value: 'ML-DSA-65', note: 'NIST FIPS 204' },
  { label: 'Hash Function', value: 'BLAKE3', note: 'Post-quantum ready' },
  { label: 'Premine', value: '0', note: 'No premine ever' },
]
export default function HomePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-content">
          <span className="tag">Now in devnet</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Quantum-resistant<br/>from <span className="text-pnb-gold">genesis</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pnb-muted">
            PiNeroBase Coin (PNB) is the first cryptocurrency built ground-up on NIST FIPS 204 ML-DSA-65 signatures and BLAKE3 hashing. No ECDSA. Quantum-resistant at the protocol layer.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/getting-started" className="btn-primary">Get Started</Link>
            <Link href="/whitepaper" className="btn-secondary">Read Whitepaper</Link>
          </div>
        </div>
      </section>
      <section className="border-b border-pnb-border">
        <div className="container-content grid grid-cols-2 divide-x divide-y divide-pnb-border md:grid-cols-4 md:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-8">
              <p className="font-mono text-2xl font-semibold text-pnb-gold">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-pnb-white">{s.label}</p>
              <p className="mt-0.5 text-xs text-pnb-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
