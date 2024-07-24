/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Zain':["Zain", "sans-serif"],
      },

      marginBottom: {
        '500px': '500px',
      }
    },
  },
  plugins: [
    require('tailwind-fontawesome'),
    require('tailwind-typewriter')({
      wordsets: {
          names: {
              words: ['Hi, my name is John Dang'],
              delay: 3
          },
      }
  })
  ],
};

