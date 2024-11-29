/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fra: ["Libre Baskerville"],
        bar: ["Barlow"]
      },
      colors: {
        'gray-blue': "hsl(213, 9%, 39%)",
        'yel': "hsl(51, 100%, 49%)",
        'red': "hsl(7, 99%, 80%)",
        'green': 'hsl(167, 40%, 24%)',
        'blue': "hsl(198, 62%, 26%)",
        'green-footer': "hsl(168, 34%, 55%)"
      },
      inset: {
        '380px': '380px',
      }
    },
  },
  plugins: [],
}

