/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        void: '#050505',
        midnight: '#0B0C15',
        cyan: '#00F0FF',
        purple: '#7000FF',
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 240, 255, 0.45)',
        planet: '0 0 80px rgba(112, 0, 255, 0.45)',
      },
    },
  },
  plugins: [],
}
