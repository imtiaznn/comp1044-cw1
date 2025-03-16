/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          primary: "#F5F5F5",
          secondary: "#353839",
          tertiary: "#F8F6F0",
      },
      fontFamily: {
        archivo: ['archivo', 'Archivo'],
        playfaird: ['playfaird', 'Playfair'],
      },
    },
  },
  plugins: [],
}

