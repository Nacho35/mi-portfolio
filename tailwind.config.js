/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      mate: "#34353a",
      mate2: "#31333B",
      mate3: "#3D3E42",
      obscure: "#A68D65",
      gold: "#ffcc6d",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  extend: {},
};
