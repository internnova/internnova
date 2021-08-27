module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bg: '#fff',
      fg: '#000',
      variant: {
        1: '#b2dfdb',
        2: '#26a69a',
      },
      gray: '#7D8597',
    },
  },
  variants: {
    extend: {},
  },
};
