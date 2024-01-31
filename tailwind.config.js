/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        raleWay: ['Raleway', 'sans-serif'],
      },
      colors: {
        'very-dark-blue': '#070439',
        'desaturated-blue': '#585989',
        'bright-blue': '#3065f8',
        'moderate-cyan': '#3c9f8f',
        'light-grayish-blue': '#f8f8fe',
        'light-gray': '#bfbfbf',
      },
      backgroundImage: {
        'curve-desktop': 'url(./assets/images/bg-curve-desktop.svg)',
        'curve-mobile': 'url(./assets/images/bg-curve-mobile.svg)',
      },
      screens: {
        sm: '540px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
