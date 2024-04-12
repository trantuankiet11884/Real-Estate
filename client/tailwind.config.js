/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-50": "#edeff6",
        "main-100": "#dbdfec",
        "main-200": "#b7bfd9",
        "main-300": "#92a0c7",
        "main-400": "#6e80b4",
        "main-500": "#4a60a1",
        "main-600": "#3b4d81",
        "main-700": "#2c3a61",
        "main-800": "#1e2640",
        "main-900": "#0f1320",
      },
      colors: {
        "main-50": "#edeff6",
        "main-100": "#dbdfec",
        "main-200": "#b7bfd9",
        "main-300": "#92a0c7",
        "main-400": "#6e80b4",
        "main-500": "#4a60a1",
        "main-600": "#3b4d81",
        "main-700": "#2c3a61",
        "main-800": "#1e2640",
        "main-900": "#0f1320",
      },
      width: {
        main: "1319px",
      },
    },
  },
  plugins: [],
};
