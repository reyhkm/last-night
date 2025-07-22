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
        'lyric-swoop-in': 'lyricSwoopIn 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'lyric-gentle-sway': 'lyricGentleSway 1.5s ease-in-out forwards',
        'lyric-fade-up': 'lyricFadeUp 1.2s ease-out forwards',
        'lyric-zoom-in': 'lyricZoomIn 1s ease-in-out forwards',
        'fall': 'fall 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          'from': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073' },
          'to': { textShadow: '0 0 10px #fff, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6' },
        },
        lyricSwoopIn: {
          '0%': { opacity: 0, transform: 'translateY(40px) scale(0.9)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        lyricGentleSway: {
            '0%': { opacity: 0, transform: 'translateX(-50px) rotate(-5deg)' },
            '100%': { opacity: 1, transform: 'translateX(0) rotate(0deg)' },
        },
        lyricFadeUp: {
            '0%': { opacity: 0, transform: 'translateY(50px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        lyricZoomIn: {
            '0%': { opacity: 0, transform: 'scale(0.5)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: 0 },
        },
      }
    },
  },
  plugins: [],
}
