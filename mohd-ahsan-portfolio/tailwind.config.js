/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF9F6',
          muted: '#F3F2EC',
          paper: '#FFFFFF',
          border: '#E7E5DC',
          dark: '#0C0F17',
          'dark-card': '#141A24',
          'dark-border': '#222B3A',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1E3A5F',
          900: '#0F233A',
          950: '#081321',
        },
        bronze: {
          50: '#FDF9F2',
          100: '#F7EEDC',
          200: '#EBD8B8',
          300: '#D9BC8E',
          400: '#C29C61',
          500: '#A47D3B',
          600: '#876228',
          700: '#6E4D1D',
          800: '#543916',
          900: '#3D280E',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'elevation': '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
        'modal': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
      },
      letterSpacing: {
        'widest-wordmark': '0.18em',
      }
    },
  },
  plugins: [],
}
