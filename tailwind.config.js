/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
      jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        navy: {
          950: '#040913',
          900: '#060E1C',
          850: '#0A1526',
          800: '#0F1E36',
          700: '#172B4D',
          600: '#1E3863',
        },
        defence: {
          dark: 'rgb(10, 13, 14)',
          card: 'rgb(10, 13, 14)',
          border: 'rgba(255, 255, 255, 0.08)',
          red: '#DC2626',
          redGlow: 'rgba(220, 38, 38, 0.4)',
        },
      },
      letterSpacing: {
        'military': '0.22em',
        'aerospace': '0.16em',
      },
    },
  },
  plugins: [],
}
