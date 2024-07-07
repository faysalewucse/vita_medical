/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#76C1F3",
        gr: "#626060",
        background1: "#EDEDED"
      }
    },
  },
  plugins: [],
}