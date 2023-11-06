/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx',
    './index.html'],
  theme: {
    screens: {
      'sm': '280px',
      'md': '720px',
      'lg': '1025px',
      'xl': '2500px',
    },
    fontFamily: {
      sans: ['Cantarell', 'sans-serif'],
    },
    colors: {
      'gray1': '#626262',
      'primary': '#167D7F',
      'black-60': 'rgba(0, 0, 0, 0.60)'
    },
    extend: {},
  },
  plugins: [],
}

