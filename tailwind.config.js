/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brandPrimary':'#4CAF4F',
        'brandSecondary':'#263238',
        'brandInfo':'#2194f3',
        'neutralBlack':'#263238',
        'neutralDGrey':'#4D4D4D',
        'neutralGrey':'#717171',
        'neutralLGrey':'#89939E',
        'neutralSilver':'#F5F7FA',
        'neutralWhite':'#FFFFFF',
        'gray900':'#18191F',
      }
    },
  },
  plugins: [],
}

