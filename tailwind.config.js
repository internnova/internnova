module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neongreen: "#52DEE5",
        text: "#C7D3FF",
        textdark: "#A1ABBF",
        bgblue: "#222E50",
        darkerblue: "#0A192F",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
