/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          'from': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073' },
          'to': { textShadow: '0 0 10px #fff, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6' },
        }
      }
    },
  },
  plugins: [],
}
