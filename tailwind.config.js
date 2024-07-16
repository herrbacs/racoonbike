/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
          '0%, 100%': { transform: 'translateY(-50%) translateX(-50%)' },
          '50%': { transform: 'translateY(-54%) translateX(-50%)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(-50%) translateX(-50%)' },
          '25%': { transform: 'rotate(3deg) translateY(-50%) translateX(-50%)' },
          '50%': { transform: 'rotate(-3deg) translateY(-50%) translateX(-50%)' },
          '75%': { transform: 'rotate(3deg) translateY(-50%) translateX(-50%)' }
        }
      },
      animation: {
        breath: 'breath 3s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out'
      }
    }
  },
  plugins: []
}
