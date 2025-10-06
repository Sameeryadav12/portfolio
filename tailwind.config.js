/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-base': 'rgb(var(--brand-base) / <alpha-value>)',
        'brand-slate': 'rgb(var(--brand-slate) / <alpha-value>)',
        'brand-mist': 'rgb(var(--brand-mist) / <alpha-value>)',
        'brand-fog': 'rgb(var(--brand-fog) / <alpha-value>)',
        'brand-teal': 'rgb(var(--brand-teal) / <alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
