/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/jpg/hero.jpg')",
      },
    },
    minWidth: {
      30: '30rem',
    },
    minHeight: {
      40: '40rem',
    },
    fontFamily: {
      body: ['"Lato"'],
    },
  },
  plugins: [],
};
