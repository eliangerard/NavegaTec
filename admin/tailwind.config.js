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
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        "fade-fast": 'fadeIn .25s ease-in-out',
        "fade-out": 'fadeOut .25s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      colors: {
        "yellow": "#FFDB58",
        "purple": "#C1BEFA",
        "green": "#7FBC8C",
        "red": "#F9886D",
      }
    },
  },
  plugins: [],
}