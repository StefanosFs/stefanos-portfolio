/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: '#111827', // dark gray for dark mode background
        secondary: '#1f2937',
        tertiary: '#374151',
      },
    },
  },
  plugins: [],
} 