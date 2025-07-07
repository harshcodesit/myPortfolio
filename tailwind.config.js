/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#021526',
        'secondary-dark': '#0C0C0C',
        'accent-blue': '#6EACDA',
        'light-text': '#E0E0E0',
        'muted-text': '#B0B0B0',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'bounce-slow': 'bounce 2s infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-slow-reverse': 'floatSlowReverse 8s ease-in-out infinite',
        'float-diagonal': 'floatDiagonal 10s ease-in-out infinite',
        'float-symbol': 'floatSymbol 12s ease-in-out infinite',
        'float-symbol-reverse': 'floatSymbolReverse 15s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'flow-dots': 'flowDots 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        typewriter: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        floatSlow: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
        },
        floatSlowReverse: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(20px) rotate(-5deg)',
          },
        },
        floatDiagonal: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) rotate(45deg)',
          },
          '25%': {
            transform: 'translate(10px, -10px) rotate(50deg)',
          },
          '50%': {
            transform: 'translate(-5px, -15px) rotate(40deg)',
          },
          '75%': {
            transform: 'translate(-10px, 5px) rotate(55deg)',
          },
        },
        floatSymbol: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.1',
          },
          '25%': {
            transform: 'translateY(-10px) translateX(5px) rotate(2deg)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-20px) translateX(-3px) rotate(-1deg)',
            opacity: '0.2',
          },
          '75%': {
            transform: 'translateY(-15px) translateX(8px) rotate(1deg)',
            opacity: '0.4',
          },
        },
        floatSymbolReverse: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.15',
          },
          '25%': {
            transform: 'translateY(15px) translateX(-8px) rotate(-2deg)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(25px) translateX(5px) rotate(1deg)',
            opacity: '0.25',
          },
          '75%': {
            transform: 'translateY(10px) translateX(-3px) rotate(-1deg)',
            opacity: '0.35',
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(20deg)',
          },
          '75%': {
            transform: 'rotate(-20deg)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(110, 172, 218, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(110, 172, 218, 0.6)',
          },
        },
        flowDots: {
          '0%': {
            backgroundPosition: '0% 0%',
          },
          '100%': {
            backgroundPosition: '0% 100%',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};