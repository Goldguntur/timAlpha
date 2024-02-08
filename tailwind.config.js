/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./yayasan/**/*.{html,js}"],
  theme: {
    fontFamily: {
      arial: ["arial"],
    },
    extend: {},
  },
  plugins: [],
});
