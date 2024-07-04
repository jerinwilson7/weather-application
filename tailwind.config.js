/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white-30':'rgba(255, 255, 255, 0.3)',
        'border-bl':'#ffffff1a',
        'forcast':'rgba(10, 36, 128, 0.6)'
      },
      backgroundImage: {
        day:"url('./src/assets/images/day.png')",
        night:"url('./src/assets/images/night.png')",
        bgMain:"url('./src/assets/images/fullpage-bg.png')",
      }

      
    },
  },
  plugins: [],
}