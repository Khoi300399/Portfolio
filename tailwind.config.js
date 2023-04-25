/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        morph: ["@layer keyframes, @responsive"],
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [],
};
