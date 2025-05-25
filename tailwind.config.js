/** @type {import('tailwindcss').Config} */
import { PINK, CREME, BORDO, DARK_BROWN } from "./src/shared/constants/Colors";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./src/shared/**/*.{html,js,jsx,ts,tsx}",
    "./src/sections/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: PINK,
        creme: CREME,
        bordo: BORDO,
        darkBrown: DARK_BROWN,
      },
      screens: {
        xs: "320px",
      },
      keyframes: {
        fadeInMenu: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        fadeInMenu: "fadeInMenu 0.3s ease-out forwards",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
