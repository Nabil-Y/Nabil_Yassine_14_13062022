/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B7007",
        secondary: "#93AD18",
        white: "#FFF",
        black: "#000",
        grey: "#CCC",
      },
    },
  },
  plugins: [],
};
