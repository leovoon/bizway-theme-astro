const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "970px",
      },
    },
    extend: {
      fontFamily: {
        arvo: ["Arvo", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "3xl": "0 20px 10px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};
