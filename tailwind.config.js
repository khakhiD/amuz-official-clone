/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
      Poppins: ['Poppins'],
    },
    colors: {
      background: '#1C1C1C',
      white: '#fff',
      primary: '#104DF5',
      gray: '#707070',
      alphaGray: '#707070a8',
      hoverGray: '#ffffffa8',
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
};
