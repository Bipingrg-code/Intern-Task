/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkblue: 'hsl(233, 26%, 24%)',
          limegreen: 'hsl(136, 65%, 51%)',
          cyan: ' hsl(192, 70%, 51%)',
        },
        secondary: {
          veryLight: '(0, 0%, 100%)',
          light: '(0, 0%, 98%)',
          default: ' hsl(220, 16%, 96%)',
          dark: ' hsl(233, 8%, 62%)',
        }
      },
      backgroundImage:{
        'bgImg': './public/images/'
      }
    },
  },
  plugins: [],
}