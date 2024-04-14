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
        "overlay-10": "rgba(0,0,0,0.1)",
        "overlay-20": "rgba(0,0,0,0.2)",
        "overlay-30": "rgba(0,0,0,0.3)",
        "overlay-40": "rgba(0,0,0,0.4)",
        "overlay-50": "rgba(0,0,0,0.5)",
        "overlay-60": "rgba(0,0,0,0.6)",
        "overlay-70": "rgba(0,0,0,0.7)",
        "overlay-80": "rgba(0,0,0,0.8)",
        "overlay-90": "rgba(0,0,0,0.9)",
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
