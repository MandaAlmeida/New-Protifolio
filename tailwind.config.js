/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx',
    './index.html'],
  theme: {
    screens: {
      'md': '720px',
      'lg': '1025px',
    },
    fontFamily: {
      fontFamily: ['Cantarell', 'sans-serif'],
    },
    colors: {
      'gray1': '#626262',
      'gray2': '#d1d5db',
      'primary': '#167D7F',
      'black': '#000000',
      'black-60': 'rgba(0, 0, 0, 0.60)'
    },
    extend: {},
  },
  plugins: [],
}

