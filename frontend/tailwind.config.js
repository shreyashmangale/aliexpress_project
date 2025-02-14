/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        inter: ["Inter", "sans-serif"],
        cormorant: ["Cormorant", "serif"]
      },
    },
  },
  plugins: [],
}