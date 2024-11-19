// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#00214F",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
