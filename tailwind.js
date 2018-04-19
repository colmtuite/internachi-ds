/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

let defaultConfig = require('tailwindcss/defaultConfig')()


/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',

  'white': 'hsl(0, 0%, 100%)',
  'black': 'hsl(0, 0%, 0%)',

  'grey-900': 'hsl(219, 25%, 10%)',
  'grey-800': 'hsl(219, 20%, 13%)',
  'grey-700': 'hsl(219, 16%, 18%)',
  'grey-600': 'hsl(219, 12%, 50%)',
  'grey-500': 'hsl(219, 16%, 76%)',
  'grey-400': 'hsl(219, 20%, 82%)',
  'grey-300': 'hsl(219, 22%, 93%)',
  'grey-200': 'hsl(219, 26%, 97%)',
  'grey-100': 'hsl(219, 34%, 99%)',

  'blue-100': 'hsl(219, 99%, 99%)',
  'blue-200': 'hsl(219, 96%, 97%)',
  'blue-300': 'hsl(219, 94%, 90%)',
  'blue-400': 'hsl(219, 78%, 68%)',
  'blue-500': 'hsl(219, 84%, 56%)',
  'blue-600': 'hsl(219, 82%, 45%)',
  'blue-700': 'hsl(219, 84%, 35%)',
  'blue-800': 'hsl(219, 84%, 12%)',
  'blue-900': 'hsl(219, 84%, 10%)',

  'red-100': 'hsl(0, 100%, 99%)',
  'red-200': 'hsl(0, 100%, 97%)',
  'red-300': 'hsl(0, 92%, 90%)',
  'red-400': 'hsl(0, 85%, 78%)',
  'red-500': 'hsl(0, 100%, 65%)',
  'red-600': 'hsl(0, 100%, 45%)',
  'red-700': 'hsl(0, 100%, 40%)',
  'red-800': 'hsl(0, 100%, 12%)',
  'red-900': 'hsl(0, 100%, 10%)',

  'green-100': 'hsl(134, 50%, 99%)',
  'green-200': 'hsl(134, 50%, 97%)',
  'green-300': 'hsl(134, 48%, 88%)',
  'green-400': 'hsl(134, 40%, 64%)',
  'green-500': 'hsl(134, 58%, 42%)',
  'green-600': 'hsl(134, 52%, 40%)',
  'green-700': 'hsl(134, 50%, 38%)',
  'green-800': 'hsl(134, 50%, 12%)',
  'green-900': 'hsl(134, 50%, 10%)',

  'yellow-100': 'hsl(40, 100%, 99%)',
  'yellow-200': 'hsl(40, 100%, 97%)',
  'yellow-300': 'hsl(40, 92%, 88%)',
  'yellow-400': 'hsl(40, 85%, 78%)',
  'yellow-500': 'hsl(40, 90%, 50%)',
  'yellow-600': 'hsl(40, 90%, 42%)',
  'yellow-700': 'hsl(40, 100%, 35%)',
  'yellow-800': 'hsl(40, 100%, 12%)',
  'yellow-900': 'hsl(40, 100%, 10%)',
}

module.exports = {

  colors: colors,

  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },

  fonts: {
    'sans': [
      'Gotham Narrow SSm A',
      'Gotham Narrow SSm B',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]
  },

  textSizes: {
    '1': '.625rem',     // 10px
    '2': '.75rem',     // 12px
    '3': '.875rem',    // 14px
    '4': '1rem',     // 16px
    '5': '1.125rem',   // 18px
    '6': '1.25rem',    // 20px
    '7': '1.5rem',    // 24px
    '8': '2.125rem',  // 34px
    '9': '2.75rem',      // 44px
    '10': '4rem',      // 64px
  },

  fontWeights: {
    'thin': 100,
    'ultralight': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'ultrabold': 800,
    'black': 900,
  },

  leading: {
    '0': 1,
    '1': 1.15,
    '2': 1.25,
    '3': 1.5,
    '4': 1.75,
  },

  tracking: {
    '02': '-.04em',
    '01': '-.02em',
    '0': '0',
    '1': '.05em',
    '2': '.1em',
  },

  textColors: colors,

  backgroundColors: colors,

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },

  borderColors: Object.assign({ default: colors['grey-light'] }, colors),

  borderRadius: {
    '0': '0',
    '1': '.125rem',
    '2': '.25rem',
    '3': '.5rem',
    'pill': '9999px',
    'round': '50%',
  },

  width: {
    'auto': 'auto',
    'px': '1px',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw'
  },

  height: {
    'auto': 'auto',
    'px': '1px',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
    'full': '100%',
    'screen': '100vh'
  },

  minWidth: {
    '0': '0',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
    'full': '100%',
  },

  minHeight: {
    '0': '0',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
    'full': '100%',
    'screen': '100vh'
  },

  maxWidth: {
    'auto': 'auto',
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
  },

  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },

  padding: {
    '0': '0',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
  },

  margin: {
    'auto': 'auto',
    '0': '0',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
  },

  negativeMargin: {
    '0': '0',
    '1': '.5rem',
    '2': '1rem',
    '3': '1.5rem',
    '4': '2rem',
    '5': '2.5rem',
    '6': '3rem',
    '7': '3.5rem',
    '8': '4rem',
    '9': '5rem',
  },

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'none': 'none',
  },

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
    '900': 900,
  },

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  svgFill: {
    'current': 'currentColor',
  },

  svgStroke: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants: 'responsive', 'hover', 'focus'
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
