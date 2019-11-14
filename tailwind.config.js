module.exports = {
  theme: {
    transitionProperty: {
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    extend: {
      colors: {
        'yuika-blue': {
          '100': '#C6E7F8',
          '200': '#9FD3F0',
          '300': '#7BBEE5',
          '400': '#5AA7D7',
          '500': '#3B90C6',
          '600': '#2E72AA',
          '700': '#22558C',
          '800': '#173B6C',
          '900': '#0E254C',
        }
      },
      maxHeight: {
       '16': '4rem',
       '24': '6rem',
       '32': '8rem',
      }
    },
    fontFamily: {
      'sans': ['"Exo 2"',' -apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'display': ['"Exo 2"',' -apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'body': ['"Exo 2"',' -apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
    }
  },
  variants: ['responsive', 'group-hover', 'hover', 'active' ],
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
