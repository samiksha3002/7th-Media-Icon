/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/components/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      colors: {
        gold: "#8B5E3C",
      },
    },
  },
  plugins: [],
};
