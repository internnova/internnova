// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#010101",
        fg: "#000",
        variant: {
          1: "#b2dfdb",
          2: "#26a69a",
        },
        gray: "#7D8597",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
