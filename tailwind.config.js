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
    },
    fontFamily: {
      'sans': ['"Exo 2"'],
      'display': ['"Exo 2"'],
      'body': ['"Exo 2"']
    }
  },
  variants: ['responsive', 'group-hover', 'hover', 'active' ],
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
