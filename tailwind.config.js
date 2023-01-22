module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'blue': '#2F6EB5',
      'green': '#79D292',
      'red': '#DD9982',
      'blue-darken': '#225B9B',
      'grey': '#EFF0F4',
      'grey-darken': '#E5E7ED',
      'white': '#fff',
      'black': '#000',
      'orange': '#E95A29',
    },
    fontSize: {
      '11': '1.1rem',
      '12': '1.2rem',
      '13': '1.3rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': ['2.4rem', '120%'],
      '32': ['3.2rem', '120%'],
      '40': ['4rem', '120%'],
      '48': ['4.8rem', '120%'],
      '60': ['6rem', '120%'],
    },
    borderRadius: {
      'DEFAULT': '0.6rem',
      '2': '.2rem',
      '4': '.4rem',
      '8': '.8rem',
      '12': '1.2rem',
      '16': '1.6rem',
      'full': '99999rem',
    },
    spacing: {
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      64: '64px',
      80: '80px',
      96: '96px',
      128: '128px'
    },
    container: {
      DEFAULT: '2.4rem',
      center: true,
    },
    aspectRatio: {
      '4/3': '4 / 3',
      '9/16': '9 / 16',
      '16/9': '16 / 9',
    },
    screens: {
      'xs': '380px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px'
    },
    extend: {
      lineHeight: {
        '16': '160%'
      },
      height: {
        '48': '4.8rem',
      },
      backgroundImage: {
        'iconpattern': "url('/images/portfolio/sprite.svg'), linear-gradient(to right bottom, #924FE7, #5214E1)",
     },
    },
  },
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
  ]
}