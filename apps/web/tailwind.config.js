const colors = require("tailwindcss/colors");

const fontFallback = [
  "Source Sans Pro",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif"
];

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    colors: {
      black: colors.black,
      white: colors.white,
      surface: {
        ground: "rgb(var(--surface-color-ground) / <alpha-value>)",
        section: "rgb(var(--surface-color-section) / <alpha-value>)",
        card: "rgb(var(--surface-color-card) / <alpha-value>)",
        overlay: "rgb(var(--surface-color-overlay) / <alpha-value>)",
        border: "rgb(var(--surface-color-border) / <alpha-value>)",
        hover: "rgb(var(--surface-color-hover) / <alpha-value>)",
        text: "rgb(var(--surface-color-text) / <alpha-value>)"
      },
      primary: {
        DEFAULT: "rgb(186 104 200 / <alpha-value>)",
        accent: "rgb(176 82 192 / <alpha-value>)"
      }
    },
    fontFamily: {
      montserrat: ["Montserrat", ...fontFallback],
      rowdies: ["Rowdies", ...fontFallback]
    }
  },
  plugins: []
};
