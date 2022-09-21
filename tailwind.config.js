/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black: "#1E1E1E",
        white: "#Ffffff",
        white2: "#F5F5F5",
        purple: "#44195E",
        purple2: "#DEDEF0",
        grey: "#B2B1B9",
        grey2: "#73777B",
        grey3: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
