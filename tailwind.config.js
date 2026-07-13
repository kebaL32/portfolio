/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    keyframes: {
      identifier: {
        "0%": {
          borderColor: "blue",
          transform: "translate(0, 0px)",
          boxShadow: "5px 5px 100px 10px blue",
        },
        "25%": {
          borderColor: "rgb(23, 244, 11)",
          boxShadow: "5px 5px 100px 10px  rgb(23, 244, 11)",
        },
        "50%": {
          borderColor: "rgb(12, 12, 199)",
          transform: "translate(0, 10px)",
          boxShadow: "5px 5px 100px 10px  rgb(12, 12, 199)",
        },
        "75%": {
          borderColor: "rgb(130, 217, 160)",
          boxShadow: "5px 5px 100px 10px  rgb(130, 217, 160)",
        },
        "100%": {
          borderColor: "rgb(50, 50, 205)",
          transform: "translate(0px, -0px)",
          boxShadow: "5px 5px 100px 10px  rgb(50, 50, 205)",
        },
      },
    },
    animation: {
      identifier: "identifier 3s infinite",
    },
  },
  plugins: [],
};
