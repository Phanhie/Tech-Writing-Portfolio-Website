/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Inconsolata']
      },
      gap:{
        '100': '500px'
      },
      height:{
         '100': '500px'
      },

    },
  },
  plugins: [],
}

