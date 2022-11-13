/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#6B9080",
      primaryHover: "#557969", 
      secondary:"#CCE3DE",
      tertiary:"#666",
      borderColor:"#999"
    },
    extend: {},
  },
  plugins: [],
}
