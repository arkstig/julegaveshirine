/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#C56058",
        blue: "#8097A9",
        white: "#DEDEDE",
        pink: "#E9C8C3",
        brown: "#AAA28F",
        white2: "#FFFF",
      },
      backgroundImage: {
        bg: "url('img/1.jpg')",
      },
    },
  },
  plugins: [],
};
