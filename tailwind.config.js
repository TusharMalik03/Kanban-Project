/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'mobile': '300px',
      'sm':'640px',
      'md':'768px',
    }
  },
  plugins: [],
}

