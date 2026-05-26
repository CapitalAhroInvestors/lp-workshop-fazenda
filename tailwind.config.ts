import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#000000',
        'bg-elevated': '#0A0F0C',
        'bg-card': '#0F1612',
        'bg-card-hover': '#131C17',
        'green-glow': '#4ADE80',
        'green-bright': '#22C55E',
        'green-deep': '#15803D',
        'green-subtle': '#1F3A2E',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8C5BD',
        'text-muted': '#6B7A72',
        danger: '#DC2626',
        warning: '#F59E0B',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['64px', { lineHeight: '1.05' }],
        'hero-mobile': ['40px', { lineHeight: '1.05' }],
        'h2-desktop': ['48px', { lineHeight: '1.1' }],
        'h2-mobile': ['32px', { lineHeight: '1.1' }],
        'h3-desktop': ['28px', { lineHeight: '1.2' }],
        'h3-mobile': ['22px', { lineHeight: '1.2' }],
        'body-desktop': ['17px', { lineHeight: '1.6' }],
        'body-mobile': ['16px', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'glow-circle': '0 0 24px rgba(74, 222, 128, 0.35)',
        'glow-cta': '0 0 40px rgba(34, 197, 94, 0.4)',
        'glow-card': '0 0 32px rgba(74, 222, 128, 0.2)',
      },
      borderColor: {
        subtle: 'rgba(74, 222, 128, 0.15)',
        glow: 'rgba(74, 222, 128, 0.4)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
