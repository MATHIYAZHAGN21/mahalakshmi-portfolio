/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#142B3A', teal: '#16A6A1', ink: '#202B36', muted: '#8493A1', cloud: '#F8FAFC' },
      fontFamily: { sans: ['Manrope', 'sans-serif'] },
    },
  },
  plugins: [],
}
