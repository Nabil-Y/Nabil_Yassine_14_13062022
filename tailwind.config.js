/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F4C01",
        secondary: "#92AC19",
        white: "#FFF",
        black: "#000",
        grey: "#CCC",
      },
    },
  },
  plugins: [],
};
