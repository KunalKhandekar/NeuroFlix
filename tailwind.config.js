/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1500px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1100px'},
      // => @media (max-width: 1023px) { ... }

      'slg': {'max': '920px'},

      'mmd': {'max': '810px'},
      'md': {'max': '759px'},
      // => @media (max-width: 767px) { ... }
      // phone... 
      'sm': {'max': '680px'},
      'ssm': {'max': '590px'},
      'xsm': {'max': '450px'},
      'xxsm': {'max': '370px'},
      'xxxsm': {'max': '355px'}
    },
    extend: {
      scale: {
        '175': '1.80',
      }
    }
  },
  plugins: [],
}

