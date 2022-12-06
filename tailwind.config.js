/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f4f4f4",
        dark: "#121212",
        "light-text": "#080808",
        "dark-text": "#E0E0E0",
        primary: "#62aeef",
        secondary: "#68af73",
        off: {
          light: "#dcdcdc",
          dark: "#0b0b0b",
        },
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
