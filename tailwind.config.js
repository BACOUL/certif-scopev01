/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#22C55E',
        light: '#F8FAFC',
        text: '#1E293B',
      },
    },
  },
  plugins: [],
};
