/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        body: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      colors: {
        sea: {
          950: '#091e20',
          900: '#0e2b2e',
          800: '#163438',
          700: '#1e4347',
          DEFAULT: '#1a3c40',
          600: '#2d5a5f',
          500: '#3d7177',
          400: '#5a9099',
          300: '#7fb0b8',
        },
        sand: {
          50: '#faf6ef',
          100: '#f3e9d6',
          200: '#e8d9ba',
          300: '#d9c49a',
          DEFAULT: '#d4bc8e',
          500: '#c4a872',
        },
        terra: {
          DEFAULT: '#b04030',
          600: '#8a3225',
          700: '#6b261c',
          light: '#cc5540',
        },
        gold: '#b8922a',
      },
      animation: {
        'slide-up': 'slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
        'fade-in': 'fadeIn 0.25s ease-out',
        'fade-in-down': 'fadeInDown 0.2s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}