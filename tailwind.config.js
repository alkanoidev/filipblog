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
        primary: "#0369a1",
        secondary: "#0369a1",
        off: {
          light: "#e8e8e8",
          dark: "#0b0b0b",
        },
      },
      boxShadow: {
        'center': ': 0px 0px 5px 0px rgba(0,0,0,0.75)',
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))"
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
