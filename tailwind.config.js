/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFB",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E90",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#FF3B30",
        success: "#4CD964",
      },
    },
  },
  plugins: [],
};
