const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        FYellow: "#FDB600",
      },
    },
  },
  plugins: [heroui()],
};
