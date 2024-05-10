/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'nude': '#f1f1f1',
      'nude-dark': '#e6e7e7',
      'white-new':'#f7f7ff',
      'gray':'#a8a29e',
      'black-new':'#171717',
      'opaco-white': '#e8e7de',
      'brown': '#694A38',
      'mint-cream': '#E5ECE9',
      'battleship-gray': '#969A97',
      'timber-wolf': '#D6D1CD',
      'dark-blue':'#011936',
      'meddium-blue':'#00597d',
      'cyan': '#40c8b8',
      'wine': '#C82621',
      'green':'#028727CC'
    },
  },
  plugins: [],
}
