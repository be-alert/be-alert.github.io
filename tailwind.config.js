/** @type {import('tailwindcss').Config} */
export default {
  content: { relative: true, files: ['./index.html', './src/**/*.{ts,tsx}'] },
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#05070f', 1: '#080b16', 2: '#0b1020', 3: '#10172d', 4: '#161f3b' },
        brand: { 300: '#a5bcff', 400: '#7c9bff', 500: '#4f74ff', 600: '#3b5ff5', 700: '#2a45d6' },
        radar: { 200: '#b6fbee', 300: '#7ff2dc', 400: '#2ee6c5', 500: '#14d1b0', 600: '#0ea68c' },
        alert: { 300: '#ff9a9d', 400: '#ff6b70', 500: '#ff4d55', 600: '#e5323b' },
        amber: { 300: '#ffd27a', 400: '#ffbe3d', 500: '#ffa51a' },
        violet: { 400: '#a594ff', 500: '#8b7bff' },
        mint: { 400: '#4ade9b', 500: '#22c97e' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 6.4vw, 5.6rem)', { lineHeight: '0.95', letterSpacing: '-0.045em' }],
        title: ['clamp(2.25rem, 4.6vw, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        phone: '0 60px 120px -30px rgb(0 0 0 / 0.75), 0 30px 60px -30px rgb(0 0 0 / 0.8), inset 0 0 0 1px rgb(255 255 255 / 0.08)',
        glow: '0 0 0 1px rgb(255 255 255 / 0.08), 0 12px 40px -12px rgb(79 116 255 / 0.65)',
        panel: 'inset 0 1px 0 0 rgb(255 255 255 / 0.06), 0 30px 60px -40px rgb(0 0 0 / 0.8)',
      },
      keyframes: {
        sweep: { to: { transform: 'rotate(360deg)' } },
        ripple: { '0%': { transform: 'scale(0.2)', opacity: '0.8' }, '100%': { transform: 'scale(1)', opacity: '0' } },
        ping: { '0%': { transform: 'scale(1)', opacity: '0.7' }, '80%,100%': { transform: 'scale(3.2)', opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        pop: { '0%': { opacity: '0', transform: 'translateY(10px) scale(0.96)' }, '100%': { opacity: '1', transform: 'none' } },
        shine: { to: { backgroundPosition: '200% center' } },
      },
      animation: {
        sweep: 'sweep 5s linear infinite',
        ripple: 'ripple 4s cubic-bezier(0.2, 0.7, 0.3, 1) infinite',
        ping: 'ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite',
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 60s linear infinite',
        blink: 'blink 1.8s ease-in-out infinite',
        pop: 'pop 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        shine: 'shine 6s linear infinite',
      },
    },
  },
  plugins: [],
};
