/** @type {import('tailwindcss').Config} */
import { PINK, CREME, BORDO } from "./src/shared/constants/Colors";

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
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
