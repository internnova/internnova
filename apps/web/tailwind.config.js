/*eslint-disable */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        navy: {
          50: "#f3f8f9",
          100: "#daf1fa",
          200: "#afe0f5",
          300: "#7cc2e7",
          400: "#479ed3",
          500: "#357dc0",
          600: "#2d62a9",
          700: "#254a87",
          800: "#1b3260",
          900: "#101f3f",
        },
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
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-glassmorphism")],
};
