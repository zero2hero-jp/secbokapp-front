/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // md: '639px',
      // lg: '1024px',
      /* Mantineのデフォルトサイズ に合わせている */
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {},
  },
  plugins: [],
};