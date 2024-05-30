const { delay } = require('rxjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,ts}",],
  darkMode: false,
  theme: {


    extend: {
      padding:{
        '50vw': '50vw',
      },
      colors:{
        red:{
          fire: '#FF1464',
        },
      },
      transitionDelay: {
        '10': '10ms',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Programme: ['Programme', "sans-serif"]
      },
      boxShadow: {
            'purple-glow': '0 0 10px rgba(128, 90, 213, 0.5)',
      },
      transitionProperty: {
        'transform': 'transform',
        'shadow': 'box-shadow',
      },
    },
  },
  plugins: [],
}

