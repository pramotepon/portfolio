/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#0D0D0D',
      secondary: '#099FFF',
      tertiary: '#00FFFF',
      quaternary: '#0033FF',
      black: '#000000',
      white: '#ffffff'
    },
    translate: {
      'm-50': '-50%',
    }, 
    dropShadow: {
      'title-shadow': '0 5px 5px rgba(0, 255, 255, 1)',
    },
    extend: {
      spacing: {
        'half': '50vh',
      },
    },
  },
  plugins: [],
}

