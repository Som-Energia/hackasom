const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        "som-green": "#97D700",
        "som-yellow": "#E0E722",
        "som-black": "#4D4D4D",
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
