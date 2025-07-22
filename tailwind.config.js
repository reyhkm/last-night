/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0c0a1d',
        'nebula-purple': '#2c2a5d',
        'starlight-gold': '#fde8a6',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'lyric-entrance': 'lyricEntrance 1.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'note-entrance': 'noteEntrance 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          'from': { textShadow: '0 0 6px #fff, 0 0 12px #fde8a6, 0 0 18px #fde8a6' },
          'to': { textShadow: '0 0 12px #fff, 0 0 18px #ffdd77, 0 0 24px #ffdd77' },
        },
        lyricEntrance: {
          '0%': { opacity: 0, transform: 'translateY(50px) scale(0.9)', filter: 'blur(5px)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        },
        noteEntrance: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '50%': { opacity: 0.8 },
          '100%': { opacity: 0.8, transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
