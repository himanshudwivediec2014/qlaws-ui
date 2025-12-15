/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'rgba(27, 54, 93, 1)',
          light: 'rgba(255, 255, 255, 0.65)',
        },
        orange: {
          gradient: {
            from: '#ff6a00',
            to: '#ff8a3d',
          },
        },
      },
    },
  },
  plugins: [],
}

