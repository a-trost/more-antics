const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        gray: colors.warmGray,
        primary: "#4c1074",
        "primary-glare": "#743c9b",
        "primary-soft": "#EBE1F3",
        "primary-harsh": "#1c0929",
        "primary-shade": "#280241",
        secondary: "#ee4433",
        "secondary-glare": "#ff6a5b",
        "secondary-soft": "#fce8e8",
        "secondary-shade": "#cd2210",
        ternary: "#eed043",
        "ternary-glare": "#ffe56a",
        "ternary-shade": "#dab819",
        lightgray: "#fcfcfc",
        middlegray: "#929292",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
