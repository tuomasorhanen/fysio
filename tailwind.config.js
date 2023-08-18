const { theme } = require('@sanity/demo/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    ...theme,
    darkMode: 'class',
    colors: {
      bg: {
        DEFAULT: 'var(--bg-color)',
      },
      text: {
        DEFAULT: 'var(--text-color)',
      },
      accent: {
        DEFAULT: 'var(--accent-color)',
      },
    },

    screens: {
      sm: '700px', //tablet
      md: '1100px', //small desktop or laptop
      lg: '1920px', // bigger desktop
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
