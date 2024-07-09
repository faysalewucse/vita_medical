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
        primary5: "#3884B6",
        primary6: "#309FE7",
        gr: "#626060",
        gr2: "#484848",
        gr3: "#6C6C6C",
        gr4: "#525252",
        grText: "#797979",
        ylwText: "#A68203",
        background1: "#EDEDED",
        background2: "#F4F6F9",
        background3: "#EBEBEB",
        background4: "#F4F4F4",
        primaryBg: "#76C1F34A",
        error: "#FF0000",
        text2: "#545454",
        yellowBg: "#F6C71D42",
      },
    },
  },
  plugins: [],
};
