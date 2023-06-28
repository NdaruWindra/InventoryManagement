/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--white) / <alpha-value>)',
        orangeLight: ' rgb(var(--orangeLight) / <alpha-value>)',
        orangeMedium: ' rgb(var(--orangeMedium) / <alpha-value>)',
        orangeDark: ' rgb(var(--orangeDark) / <alpha-value>)',
        primary: ' rgb(var(--primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
