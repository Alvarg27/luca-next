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

      keyframes: {
        slide: {
          "0%": { transform: "translate(0%)" },
          "100%": { transform: "translate(-100%)" },
        },
      },
      animation: {
        slide: "slide 35s linear infinite",
        "spin-slow-mobile": "spin 40s linear infinite",
        "spin-slow": "spin 70s linear infinite",
      },
    },
  },
  plugins: [],
};
