/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base:  '#212A31', // background
          slate: '#2E3944', // surfaces
          teal:  '#124E66', // primary accent
          mist:  '#748D92', // secondary text / borders
          fog:   '#D3D9D4', // light text
        },
      },
      borderRadius: { '3xl': '1.5rem' },
    },
  },
  plugins: [],
}
