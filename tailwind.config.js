/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Archivos en la carpeta "app"
    './pages/**/*.{js,ts,jsx,tsx}', // Archivos en la carpeta "pages"
    './components/**/*.{js,ts,jsx,tsx}', // Archivos en la carpeta "components"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};