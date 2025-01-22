/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode based on a class
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": 
          "radial-gradient(var(--tw-gradient-stops))",  // Corrected radial gradient syntax
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",  // Corrected conic gradient syntax
      },
      colors: {
        primary: "#ffc727", // Custom primary color
        dark: "#111111", // Custom dark color
      },
      container: {
        center: true, // Centers the container in the page
        padding: {
          DEFAULT: "1rem", // Default padding for container
          sm: "3rem", // Padding for small screens
        },
      },
    },
  },
  plugins: [],
}
