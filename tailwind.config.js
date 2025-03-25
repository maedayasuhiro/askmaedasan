/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serifjp: ["'Noto Serif JP'", "serif"],
      },
      backgroundImage: {
        japan: "url('/bg-japan.jpg')",
      },
    },
  },
  plugins: [],
}
