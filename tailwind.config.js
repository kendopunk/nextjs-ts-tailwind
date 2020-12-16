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
      blue: {
        lightest: '#e6ebfe',
        light: '#9cadfc',
        default: '#4162fa',
        dark: '#34495e'
      },
      body: '#595959',
      gray: {
        light: '#e6e6e6',
        default: '#ccc',
        dark: '#a6a6a6'
      },
      green: {
        light: '#6ad397',
        default: '#009900',
        dark: '#16a085'
      },
      maroon: '#800000',
      orange: {
        light: '#ffd699'
      },
      purple: '#7368a1',
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
