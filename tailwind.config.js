/*
 * tailwind.config.js
 * Description: TailwindCSS configuration
 * Copyright (c) 2020 Mark Fehrenbacher
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // gray: {
      //   '90': '#e6e6e6',
      //   '80': '#cccccc',
      //   '70': '#b3b3b3'
      // },
      maroon: '#800000',
      white: '#fff'
    },
    fontFamily: {
      body: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      screens: {
        iphonex: '375px'
      }
    }
  },
  corePlugins: {
    animation: false,
    container: false,
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    gap: false,
    gradientColorStops: false,
    gridAutoColumns: false,
    gridAutoRows: false,
    gridColumn: false,
    gridColumnEnd: false,
    gridColumnStart: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    transformOrigin: false
  },
  variants: {
    extend: {}
  },
  plugins: []
}
