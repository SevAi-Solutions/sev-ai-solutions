/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
        },
        purple: {
          500: '#a855f7',
        },
        void: '#070b12',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
