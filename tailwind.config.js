/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#5515ef',
        'theme-pink': '#eb589e',
        'theme-blue-dark': '#3c01ca',
      },
      boxShadow: {
        'theme-1': '0 0px 60px -15px rgba(0, 0, 0, 0.7)',
        'theme-2': '15px 0 35px -5px rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        '14xl': '14rem',
        '15xl': '15rem',
        '16xl': '16rem',
        '18xl': '18rem',
        '19xl': '19rem',
        '20xl': '20rem'
      },
      fontFamily: {
        'Outfit': ['PT Serif', 'serif']
      },
      lineHeight: {
        '6.5': '1.625rem',
        '12': '3rem',
      },
      letterSpacing: {
        'morespacing': '1rem'
      }
    },
  },
  plugins: [],
}
