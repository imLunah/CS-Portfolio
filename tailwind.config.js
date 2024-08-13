/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #151628, #26193c, #481b52)',
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          names: {
              words: ['John Dang', 'Frontend Developer', 'Software Engineer'],
              delay: 1

          },
      }
  }),
  ],
};

