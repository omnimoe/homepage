/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "34": "140px"
      },
      textColor:{
        "newblue": "#3b82f6"
      }
    },
  },
  plugins: [],
}

