/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#0a0a0a', // Deep space black
          900: '#12121e', // Dark navy
          800: '#1a1a2e',
        },
        primary: {
          400: '#00f3ff', // Cyan
          500: '#00d0db',
        },
        secondary: {
          400: '#a855f7', // Purple
          500: '#9333ea',
        },
        accent: {
          400: '#f43f5e', // Pink/Red for contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.5)' },
        }
      }
    },
  },
  plugins: [],
}
