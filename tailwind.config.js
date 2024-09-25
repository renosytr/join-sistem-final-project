/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#075EFD',
        'base-100' : '#BEBEBE'
      }
    },
  },
  plugins: [],
}
