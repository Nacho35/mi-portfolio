/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      color1: "#141906",
      color2: "#0f5054",
      color3: "#ff6a47",
      color4: "#ffc76a",
      color5: "#fffba9",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
    },
  },
  extend: {},
  plugins: [require("flowbite/plugin")],
  plugins: [require("daisyui")],
};
