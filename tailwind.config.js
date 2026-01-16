/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1b3a2f",
          main: "#2f6b4f",
          light: "#e6f3ee",
        },
      },
    },
  },
  plugins: [],
};
