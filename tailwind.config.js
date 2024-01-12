/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"white",
        secondary:"#ffa116",
        text1:"white",
        text2:"#c2c4be",
        background:"#1a1a1a",
        background2:"#282828",
        background3:"rgb(204, 202, 202)"
      }
    },
  },
  plugins: [],
}

