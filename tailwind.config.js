/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      bebas: ['Bebas Neue'],
      raj: ['Rajdhani'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}