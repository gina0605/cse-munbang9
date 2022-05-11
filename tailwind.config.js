const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    truncate: {
      lines: {
        2: '2',
        3: '3',
      },
    },
    extend: {
      colors: {
        'brand-1': '#7950F2',
        littleblack: 'rgba(0, 0, 0, 0.5)',
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F6',
          200: '#E5E8EB',
          300: '#D1D6DB',
          400: '#B0B8C1',
          500: '#8D95A1',
          600: '#6D7684',
          700: '#4E5968',
          800: '#333D4B',
          900: '#191F28',
        },
      },
      fontFamily: {
        sans: ['"Spoqa Han Sans Neo"', ...defaultTheme.fontFamily.sans],
        hyeon: ['"Do Hyeon"', 'sans-serif'],
      },
      fontSize: {
        10: ['0.625rem', { lineHeight: '1rem' }],
        11: ['0.6875rem', { lineHeight: '1rem' }],
        12: defaultTheme.fontSize.xs,
        13: ['0.8125rem', { lineHeight: '1.125rem' }],
        14: defaultTheme.fontSize.sm,
        15: ['0.9375rem', { lineHeight: '1.375rem' }],
        16: defaultTheme.fontSize.base,
        17: ['1.0625rem', { lineHeight: '1.625rem' }],
        18: defaultTheme.fontSize.lg,
        19: ['1.1875rem', { lineHeight: '1.875rem' }],
        20: defaultTheme.fontSize.xl,
        24: defaultTheme.fontSize['2xl'],
        30: defaultTheme.fontSize['3xl'],
        36: defaultTheme.fontSize['4xl'],
        48: defaultTheme.fontSize['5xl'],
        60: defaultTheme.fontSize['6xl'],
        72: defaultTheme.fontSize['7xl'],
        96: defaultTheme.fontSize['8xl'],
        128: defaultTheme.fontSize['9xl'],
      },
      height: {
        screen: '100vh',
        'screen-5': 'calc( 100vh - 5rem )',
        'screen-10': 'calc( 100vh - 10rem )',
        'screen-15': 'calc( 100vh - 15rem )',
      },
      minWidth: {
        ...defaultTheme.spacing,
      },
      minHeight: {
        'screen-5': 'calc( 100vh - 5rem )',
        'screen-10': 'calc( 100vh - 10rem )',
        'screen-15': 'calc( 100vh - 15rem )',
      },
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-truncate-multiline')(),
    require('./tailwind/filled'),
    require('./tailwind/outlined'),
    require('./tailwind/wh'),
  ],
};
