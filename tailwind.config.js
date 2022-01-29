/*eslint-disable */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        blue: {
          50: "#f6f9fb",
          100: "#e3f0fd",
          200: "#c5d9fa",
          300: "#9db5f3",
          400: "#798eea",
          500: "#6269e3",
          600: "#514dd6",
          700: "#3e39b6",
          800: "#2b2788",
          900: "#181956",
        },

        brand: "#8EC1D6",
        dark: "#475569",
        mid: "#CBD5E1",
        light: "#FFFFFF",
      },
      brand: "#8EC1D6",
      dark: "#475569",
      mid: "#CBD5E1",
      light: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Nunito Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-glassmorphism"),
    require("@tailwindcss/typography"),
  ],
};
