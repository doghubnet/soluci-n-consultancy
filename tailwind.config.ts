import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        gold: '#D4AF37',
        cream: '#F8F4ED'
      }
    }
  },
  plugins: []
} satisfies Config;
