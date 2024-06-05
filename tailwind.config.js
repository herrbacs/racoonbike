/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        'screen-3xl': '1920px'
      },
      colors: {
        'racoon-gray': '#a7a9ac'
      },
      screens: {
        xsm: '470px'
      }
    }
  },
  plugins: []
}
