/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#162B3E',
        accent: '#D9E021',
        secondary: '#1E293B',
        bg: '#0B1120',
        surface: '#0F172A',
        ink: '#F8FAFC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(217,224,33,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(22,43,62,0.6), transparent 45%)',
        'accent-gradient': 'linear-gradient(135deg, #D9E021 0%, #9FB000 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(217,224,33,0.25)',
        card: '0 8px 32px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(6deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
