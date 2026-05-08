import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { pnb: { black:'#0A0A0A', white:'#F5F5F0', gold:'#C9A84C', 'gold-light':'#E8C87A', muted:'#888888', border:'#1E1E1E', surface:'#111111' } }, maxWidth: { content: '1120px' } } },
  plugins: [],
}
export default config
