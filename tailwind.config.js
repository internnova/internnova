// tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5c6cff",
      },
      screens: {
        xsl: "1200px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
