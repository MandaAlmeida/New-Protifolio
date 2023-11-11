/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./src/**/*.tsx',
    './index.html'],
  theme: {
    screens: {
      'sm': '280px',
      'md': '720px',
      'lg': '1025px',
    },
    fontFamily: {
      fontFamily: ['Cantarell', 'sans-serif'],
    },
    colors: {
      'gray1': '#626262',
      'gray2': '#7B7B7B',
      'gray3': '#d1d5db',
      'primary': '#167D7F',
      'black': '#000000',
      'black-60': 'rgba(0, 0, 0, 0.60)',
      'dark': '#232323',
      'darkMenu': '#2E2E2E',
      'white': '#ffffff'
    },
    extend: {
      transitionStyle: {
        transition: "justify-content 0.3s ease-in-out",
      }
    },
  },
  plugins: [],
}

