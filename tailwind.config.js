module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#ffefd9",
        white: "#fff",
        lightDark: "#ffe7c8",
        transparent: "transparent",
        current: "currentColor",
        secondary: "#ff9200",
        primary: "#821a1a",
        success: "#1d8056",
      },
    },
    screens: {
      sm: { max: "650px" },
      md: { min: "651px", max: "1024px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
