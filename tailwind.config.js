/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alga: ["alga"],
        monument: ["monument"],
      },
      animation: {
        "spin-slow": "spin 70s linear infinite",
      },
    },
  },
  plugins: [],
};
