/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // accent: "#ff0033",
        accent: "#ffc107",
      },
    },
  },
  plugins: [],
};
