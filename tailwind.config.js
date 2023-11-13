/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#071E1B",
        "first-text": "#C39854",
        "second-text": "#0C2D28",
        "third-text": "#C5C6C8",
      },
    },
  },
  plugins: [],
};
