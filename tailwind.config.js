/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",      // si jamais
    "./src/components/**/*.{js,ts,jsx,tsx}" // si jamais
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FB6C1",
        dark: "#0B3A63",
      },
    },
  },
  plugins: [],
};
