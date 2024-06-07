/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: 'media',
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
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(-54%)' }
        }
      },
      animation: {
        breath: 'breath 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
