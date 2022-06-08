const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
   
    extend: {
      colors: {
        'color1': '#96A7CF',
         'color2': '#E3EFE8',
       },
    }
  },
  plugins: [],
}