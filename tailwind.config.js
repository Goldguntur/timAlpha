/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./yayasan/**/*.{html,js}"],
  theme: {
    fontFamily: {
      arial: ["arial"],
      serif: "sans-serif",
      poppin: ["poppins", 'sans-serif']
    },
    extend: {
      keyframes: {
        waving: {
          '0%': {backgroundPositionX: '0'},
          '100%': {backgroundPositionX: '1000px'}
        },
        waving2: {
          '0%': {backgroundPositionX: '0'},
          '100%': {backgroundPositionX: '-1000px'}
        },
      },
    },
  },
  plugins: [],
};
