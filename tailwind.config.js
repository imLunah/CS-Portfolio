/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
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
    require('tailwind-fontawesome'),
    require('tailwind-typewriter')({
      wordsets: {
          names: {
              words: ['John', 'Frontend Developer', 'Software Engineer'],
              delay: 1
          },
      }
  }),
  require('taos/plugin')
  ],

  
};

