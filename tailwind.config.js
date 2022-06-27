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
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },

      animation: {
        animate_right: 'animate_right .5s ease-in-out',
        animate_left: 'animate_left 1s ease-in-out',
      },

      keyframes: {
        animate_right_diagonal: {
          '0%': { transform: 'translate(-100% )' },

          '100%': { transform: 'translate(0%)' },
        },

        animate_left: {
          '0%': { transform: 'translateX(0%)' },

          '100%': { transform: 'translateX(-1%)' },
        },

        animate_down: {
          '0%': { transform: 'translateY(-100%)' },

          '100%': { transform: 'translateY(100%)' },
        },

        animate_right: {
          '0%': { transform: 'translateX(-50%)' },

          '100%': { transform: 'translateX(0%)' },
        },
      },

      colors: {
        color1: '#96A7CF',
        color2: '#E3EFE8',
        color4: '#243b55',
        color3: '#141e30',
        primary: '#00308b',
        footer: '#301934',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
