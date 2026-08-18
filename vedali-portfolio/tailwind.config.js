/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFCF0',
          100: '#F5F5DC',
          200: '#E8E8C0',
        },
        lavender: {
          50: '#F3E5F5',
          100: '#E6E6FA',
          200: '#D1C4E9',
          300: '#B39DDB',
          400: '#9575CD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
