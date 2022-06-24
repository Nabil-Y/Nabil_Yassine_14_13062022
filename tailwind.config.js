/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#285f03",
        secondary: "#92AC19",
        tertiary: "#047857",
        invalid: "#b91c1c",
        valid: "#15803d",
        white: "#FFF",
        black: "#000",
        grey: "#CCC",
      },
    },
  },
  plugins: [],
};
