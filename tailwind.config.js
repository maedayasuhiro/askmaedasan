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
      colors: {
        vermilion: "#E34234", // 和風の朱色（鳥居色）
      },
    },
  },
  plugins: [],
};
