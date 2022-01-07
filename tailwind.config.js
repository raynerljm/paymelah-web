const { callbackify } = require("util");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "h-almost": "calc(100vh - 84px)",
      },
      colors: {
        dark: {
          DEFAULT: "#000918",
          50: "#00348B",
          100: "#002F7E",
          200: "#002665",
          300: "#001C4B",
          400: "#001332",
          500: "#000918",
          600: "#000309",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        accent: {
          DEFAULT: "#FF5252",
          50: "#FFF3F3",
          100: "#FFE1E1",
          200: "#FFBDBD",
          300: "#FF9999",
          400: "#FF7676",
          500: "#FF5252",
          600: "#FF1010",
          700: "#CC0000",
          800: "#8A0000",
          900: "#480000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
