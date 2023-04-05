/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-cols-./
    }
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "0.8px",
      },
      boxShadow: {
        button: "0px 0px 10px 4px rgba(0,0,0,0.7)",
      }
    },
  },
  plugins: [],
}
