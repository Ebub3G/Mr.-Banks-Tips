/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'blue': {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#81cdfc',
          400: '#41b0f8',
          500: '#1a91ee',
          600: '#0b74dc',
          700: '#0a5cb6',
          800: '#0a2342', // Primary deep navy
          900: '#061b33',
        },
        'amber': {
          400: '#FFD700', // Gold accent
          500: '#fdb81e',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};