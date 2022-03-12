module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '1/2': '50%',
    },
    colors: {
      'golden': '#FFBD37',
      'gray-dark': '#484848',
      'gray-light': '#7D7987',
      'whitex': '#ffffff',
      'blue': '#233348',
      'bluish': '#C2CFE0',
    },
    fontFamily: {
      serif: ['Mulish', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}