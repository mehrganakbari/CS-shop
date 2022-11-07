/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      colors: {
        'dark-1': '#2C3333',
        'dark-0': '#3F4E4F',
        'lite-1': '#A5C9CA',
        'lite-0': '#E7F6F2',
      },
      extend: {
            screens: {
              'xs': '400px',
              'xs2': '500px',
              'sm': '568px',     
              'md': '640px',      
              'lg': '768px',
              'xl': '1024px',
              '2xl': '1280px',
              '3xl': '1536px',
            },
      },
    },
    plugins: [],
  };
  