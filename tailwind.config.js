/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Dosis', 'sans-serif'],
      title: ['Bebas Neue'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}