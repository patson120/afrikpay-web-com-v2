/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "app-primary": "rgba(36, 69, 230, 1)",
        "background-white": "rgba(255, 255, 255, 1)",
        "color-black-90": "rgba(0, 0, 0, 1)",
        "color-grey-200": "rgba(246, 245, 239, 1)",
        orange: "rgba(255, 194, 84, 1)",
      },
      fontFamily: {
        title: ["Quicksand", "Helvetica", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
}