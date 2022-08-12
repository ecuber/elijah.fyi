/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      display: ['IBM Plex Sans', 'display'],
    },
    extend: {
      colors: {
        primary: '#0D1A26',
        secondary: '#D45498',
        light: '#E0F2FF',
        'light-2': '#ABC9E3',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
