/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        dark: {
          DEFAULT: "#0A0A0A",
          card: "#111827",
          surface: "#1F2937",
        },

        primary: "#3B82F6",

        secondary: "#06B6D4",

      },


      fontFamily: {

        heading: [
          "Poppins",
          "sans-serif"
        ],

        body: [
          "Inter",
          "sans-serif"
        ],

      },


      boxShadow: {

        glow:
          "0 0 25px rgba(59,130,246,0.35)",

      },

    },

  },

  plugins: [],

}