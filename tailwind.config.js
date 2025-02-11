/** @type {import('tailwindcss').Config} */
import { PINK, CREME } from "./src/shared/constants/Colors";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: PINK,
        creme: CREME,
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
