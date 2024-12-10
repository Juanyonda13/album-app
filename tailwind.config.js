/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar');
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin({ nocompatible: true }),
  ],
};