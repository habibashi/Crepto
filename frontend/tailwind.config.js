/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGray: "#282828",
        bodyBg: "#1B1F24",
        SideBarColor: "#121418",
        logInBG: "#162235",
        inside: "#0C131D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
