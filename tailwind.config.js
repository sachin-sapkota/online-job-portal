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
        // poppins: ['Poppins', 'sans-serif'],
        // roboto: ['Roboto', 'sans-serif'],
        // opensans: ['Open Sans', 'sans-serif'],
        // ubuntu: ['Ubuntu', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },

      animation: {
        animate_right: 'animate_right .5s ease-in-out',
        animate_left: 'animate_left 1s ease-in-out',
        blurry: 'blurry 8s infinite ease-in-out',
        scaler: 'scaler 9s infinite  ',
        animate_diagonal_on: 'animate_diagonal_on .3s ease-in-out',
        animate_diagonal_off: 'animate_diagonal_off .3s ease-in-out',
      },

      keyframes: {
        scaler: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(90deg)' },
          '66%': { transform: 'scale(0.9) rotate(90deg) ' },
          '100%': { transform: 'scale(1) rotate(90deg) ' },
        },
        blurry: {
          '0%': { transform: ' translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, -20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        animate_diagonal_on: {
          '0%': { transform: 'translate(100%, -100% )' },

          '100%': { transform: 'translate(0%,0%)' },
        },
        animate_diagonal_off: {
          '0%': { transform: 'translate(0%,0%)' },

          '100%': { transform: 'translate(100%, -100% )' },
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
        background: '#F4F5FA',
        darkback: '#28243D',
        darkcard: '#312D4B',
        whiteback: '#F4F5FA',
        active: '#9155FD',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
