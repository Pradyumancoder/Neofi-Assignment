/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': "#0B0819"
      },
      spacing: {
        '10.5': '2.625rem',
        '28.5': '7.5rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

  },
  plugins: [],
}

