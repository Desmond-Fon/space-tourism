/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#0B0D17',
        'skyBlue': '#D0D6F9',
        'cream': '#FFFFFF'
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['Barlow Condensed', 'sans-serif']
      },
      backgroundImage: {
        'home-pattern': "url('../../public/assets/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
