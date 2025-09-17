/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#252222',
        'vermelho': '#710404',
        'amarelo': '#F9AC05',
        'amarelo-escuro': '#FFBE31',
        'vermelho-claro': '#FF4D4D',
        'amarelo-dark': '#D4A017',
        'vermelho-dark': '#B32B2B',
        'cinza-dark': '#D9D9D9',
        'gray-dark': '#1A1A1A',
      }
    },
  },
  plugins: [],
}
