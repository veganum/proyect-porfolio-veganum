/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0074D9',
        secondary: '#FF4136',
        accent: '#7FDBFF',
        black: '#111111',
        gray: {
          100: '#F8F8F8',
          200: '#EAEAEA',
          300: '#D2D2D2',
          400: '#A6A6A6',
          500: '#7F7F7F',
          600: '#525252',
          700: '#393939',
          800: '#262626',
          900: '#171717',
        },
        vulcan: {
          50: '#f3f5fc',
          100: '#e6ebf8',
          200: '#c7d5f0',
          300: '#96b2e3',
          400: '#5e8bd2',
          500: '#396bbe',
          600: '#2953a0',
          700: '#224282',
          800: '#203a6c',
          900: '#1f325b',
          950: '#0b1120',
      },

      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [require('autoprefixer')],
};
