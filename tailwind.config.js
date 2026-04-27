/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f0fa",
          100: "#ead8f5",
          200: "#d4b0eb",
          300: "#8B5CF6",
          400: "#937bbd",
          500: "#8045b0",
          600: "#70309D",
          700: "#5a2680",
          800: "#451d63",
          900: "#301446",
        },
        button: {
          gray: "#F4F4F5",
        },
        dark: {
          DEFAULT: "#3b4041",
          light: "#6e7075",
          lighter: "#9a9ca0",
        },
      },
      fontFamily: {
        heading: ['"Saira Condensed"', "sans-serif"],
        body: ["Inter", "Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
