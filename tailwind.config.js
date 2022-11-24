/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      "2xs": "23.4375em", // ~375px
      xs: "34em", // ~512px
      sm: "50em", // ~768px
      md: "66em", // ~1024px
      lg: "74em", // ~1120px
      xl: "90em", // ~1440px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "gray-blue": "var(--color-gray-blue)",
        "dark-gray-blue": "var(--color-dark-gray-blue)",
        "dark-blue": "var(--color-dark-blue)",
      },
      fontFamily: {
        sans: ["Manrope, sans-serif"],
      },
    },
  },
  plugins: [],
};
