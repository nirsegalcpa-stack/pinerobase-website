import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
export const metadata: Metadata = {
  metadataBase: new URL('https://pi-nerobase.com'),
  title: { default: 'PiNeroBase Coin (PNB) — Quantum-resistant cryptocurrency', template: '%s | PiNeroBase Coin' },
  description: 'PiNeroBase Coin (PNB) — NIST FIPS 204, ML-DSA-65, BLAKE3. 55.5M PNB fixed supply.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-pnb-black text-pnb-white antialiased">
        <Navbar /><main>{children}</main><Footer />
      </body>
    </html>
  )
}
