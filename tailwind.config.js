/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx',
    './index.html'],
  theme: {
    fontFamily: {
      sans: ['Cantarell', 'sans-serif'],
    },
    colors: {
      'gray1': '#626262',
      'primary': '#167D7F'
    },
    extend: {},
  },
  plugins: [],
}

