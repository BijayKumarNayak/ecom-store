/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
      },
      boxShadow:{
        'custom-shadow':'box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
      }
    },
  },
  plugins: [],
}

