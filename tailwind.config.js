/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'brandPrimary':'#01a00f',
        'brandSecondary':'#000000',
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
  plugins: [
    require('flowbite/plugin'),
  ],
}

