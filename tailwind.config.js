/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '1043px', // '614px',
      lg: '1440px'
    },
    extend: {
      fontFamily: {
        sans: 'poppins'
      },
      colors: {}
    }
  },
  plugins: []
}
