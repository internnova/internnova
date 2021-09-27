module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bgvar: "#636363",
      fgvar: "#000",
      variant: {
        1: "#b2dfdb",
        2: "#26a69a",
      },
      gray: "#7D8597",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
