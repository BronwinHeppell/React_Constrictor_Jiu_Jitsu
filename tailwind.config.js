/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#000000",
        // GRAY 20 CHANGES TOP BG COLOR
        "gray-50": "#EFE6E6",

        "gray-100": "#000000",
        // GRAY-100 CHANGES BORDERS AROUND BENEFITS
        "gray-500": "#FFFFFF",
        // GRAY-500 CHANGES TEXT COLOR

        "primary-100": "#000000",
        //PRIMARY-100 CHANGES "STICKY TOP COLOR", HAMBURGER MENU BG COLOR,ICON COLORS, "OUR CLASSES BG COLOR" AND FOOTER

        "primary-300": "#08c414",
        //PRIMARY 300 CHANGES HOVER TEXT FROM BURGER LOGO, ALSO CHANGES "JOIN NOW- DETAIL AREA"

        "primary-500": "#04700c",
        //PRIMARY 500 CHANGES "LEARN MORE BTN COLOR", "JOIN NOW HOVER COLOR",BURGER MENU"WHICH PAGE YOU'RE ON","BORDER AROUND HOVERING OVER CLASSES" ALSO ONLY CHANGES THE WORD "FIT" TF?

        "secondary-400": "#FFCD5B",

        "secondary-500": "#40c408",
        // SECONDARY 500 CHANGES BORDER AROUND THE"JOIN NOW", " CIRCLE AROUND THE HAMBURGER MENU" "SUBMIT BUTTON BORDER"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/Homepage.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        constrictortext: "url('./assets/HomePageText.png')",
        // abstractwaves: "url('./assets/AbstractWaves.png')",
        // sparkles: "url('./assets/Sparkles.png')",
        // circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
