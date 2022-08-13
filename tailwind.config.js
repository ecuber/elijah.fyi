/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      display: ['IBM Plex Sans', 'display'],
      mono: ['Overpass Mono', 'mono'],
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#0D1A26',
        secondary: '#D45498',
        accent: '#60F5D2',
        'dark-2': '#182A3E',
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
