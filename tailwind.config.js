const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        animates: 'animates 1s ease-out',
      },
      keyframes: {
        animates: {
          '0%': { transform: 'translateX(-100%)' },
          '20%': { transform: 'translateX(-80%)' },
          '40%': { transform: 'translateX(-60%)' },
          '60%': { transform: 'translateX(-40%)' },
          '80%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        color1: '#96A7CF',
        color2: '#E3EFE8',
        color4: '#243b55',
        color3: '#141e30',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
