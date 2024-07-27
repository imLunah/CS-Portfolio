/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      marginBottom: {
        '500px': '500px',
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          names: {
              words: ['John', 'Frontend Developer', 'Software Engineer'],
              delay: 1
          },
      }
  }),
  ],

  
};

