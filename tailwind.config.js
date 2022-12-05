/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f4f4f4",
        dark: "#171717",
        "light-text": "#080808",
        "dark-text": "#E0E0E0",
        primary: "#62aeef",
        secondary: "#68af73",
        off: {
          light: "#eeeeee",
          dark: "#101010",
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
