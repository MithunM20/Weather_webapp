/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Fixed typo and ensured all subdirectories are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}