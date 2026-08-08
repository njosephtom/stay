/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'sage': '#4a5d47',
        'sage-light': '#6b7d6a',
        'soft-blue': '#b8d4e8',
        'soft-blue-dark': '#7ba8d1',
        'warm-cream': '#f5f1ed',
        'dark-text': '#2d2d2d',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
