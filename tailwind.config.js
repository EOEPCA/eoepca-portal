/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.gray,
      green: colors.green,
      yellow: colors.yellow,
      cyan: colors.cyan,
      red: colors.red,
      sky: colors.sky,
      violet: colors.violet,
      rose: colors.rose,
      black: colors.black,
      white: colors.white,
      orange: colors.orange,
      blue: colors.blue,
      primary: {
        magenta: "#EF2B89",
        blue: "#6036F5",
        white: "#ffffff",
        black: "#23272f"
      },
      secondary: {
        black: "#000000",
        white: "#DADADA",
        blue: "#3397c9"
      }
    },
    fontFamily: {
      'lato': ["Lato", "sans-serif"],
      'lexend': ["Lexend", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}