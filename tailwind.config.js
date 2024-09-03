/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
    colors: {
      background: '#171717',
      white: '#fff',
      primary: '#104DF5',
      gray: '#707070',
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
};
