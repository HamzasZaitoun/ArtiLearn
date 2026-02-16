/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2fa',
          100: '#cce5f5',
          200: '#99cbeb',
          300: '#66b1e0',
          400: '#3397d6',
          500: '#0F70B7',
          600: '#0d639f',
          700: '#0a4d7c',
          800: '#083d63',
          900: '#052d4a',
          950: '#031F34',
        },
        'artikeys-orange': {
          50: '#fff7eb',
          100: '#feedcc',
          200: '#fdd999',
          300: '#fcc566',
          400: '#fbb133',
          500: '#F7941D',
          600: '#d67d15',
          700: '#b5670e',
          800: '#935108',
          900: '#723b03',
        },
        'artikeys-green': {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4CAF50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        'artikeys-navy': '#043458',
        'alice-blue': '#F1F9FF',
      },
      fontFamily: {
        sans: ['Tajawal', 'Inter', 'Noto Sans Arabic', 'sans-serif'],
        heading: ['Tajawal', 'Outfit', 'Noto Sans Arabic', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
