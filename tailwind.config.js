/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      height:{
        '80': '20rem',
        '100': '25rem'
      }
    },
  },
  plugins: [],
}