/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../shared/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'poppins'],
      'serif': ['ui-serif', 'Montagu Slab'],
      'display': ['Montserrat Alternates'],
    },
    extend: {
      colors: {
        "yellow": "#FFDB58",
        "purple": "#C1BEFA",
        "green" : "#7FBC8C",
        "red" : "#F9886D",
      }
    },
  },
  plugins: [],
}
