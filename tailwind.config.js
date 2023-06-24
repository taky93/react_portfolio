/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        gold: "#F9F871",
        text: "#424656"
      }
      
    },
    fontFamily:{
      'Raj': 'Rajdhani'
    }
  },
  plugins: [],
}