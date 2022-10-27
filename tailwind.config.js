/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5",
        dark: "#080808",
        "light-text": "#080808",
        "dark-text": "#E0E0E0",
        primary: "#68AF73",
        secondary: "#62AEEF",
        off: {
          light: "#fff",
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
