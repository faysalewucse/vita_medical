/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#76C1F3",
        primary2: "#098AD3",
        primary3: "#1993E4",
        primary4: "#5A99C3",
        gr: "#626060",
        grText: "#797979",
        background1: "#EDEDED",
        background2: "#F4F6F9",
        background3: "#EBEBEB",
        error: "#FF0000",
        text2: "#545454",
      },
    },
  },
  plugins: [],
};
