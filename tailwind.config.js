/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        'serif-alt': ['Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        // Premium earthy palette
        'terracotta': '#c96644',
        'terracotta-light': '#e8957b',
        'terracotta-dark': '#a84d2a',
        'sage': '#5a7366',
        'sage-light': '#7a9380',
        'sage-dark': '#3d4d42',
        'cream': '#f8f5f0',
        'cream-dark': '#e8dfd6',
        'wood-brown': '#6b5344',
        'wood-light': '#8b6f5c',
        'dark-text': '#1a1613',
        'light-text': '#4a4340',
        // Legacy colors (kept for compatibility)
        'soft-blue': '#b8d4e8',
        'soft-blue-dark': '#7ba8d1',
        'warm-cream': '#f5f1ed',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      keyframes: {
        'slide-down': {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
