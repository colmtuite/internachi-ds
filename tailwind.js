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

  'grey-9': 'hsl(219, 25%, 10%)',
  'grey-8': 'hsl(219, 20%, 13%)',
  'grey-7': 'hsl(219, 16%, 18%)',
  'grey-6': 'hsl(219, 12%, 50%)',
  'grey-5': 'hsl(219, 16%, 76%)',
  'grey-4': 'hsl(219, 20%, 82%)',
  'grey-3': 'hsl(219, 22%, 93%)',
  'grey-2': 'hsl(219, 26%, 97%)',
  'grey-1': 'hsl(219, 34%, 99%)',

  'blue-1': 'hsl(219, 99%, 99%)',
  'blue-2': 'hsl(219, 96%, 97%)',
  'blue-3': 'hsl(219, 94%, 90%)',
  'blue-4': 'hsl(219, 78%, 68%)',
  'blue-5': 'hsl(219, 84%, 56%)',
  'blue-6': 'hsl(219, 82%, 45%)',
  'blue-7': 'hsl(219, 84%, 35%)',
  'blue-8': 'hsl(219, 84%, 12%)',
  'blue-9': 'hsl(219, 84%, 10%)',

  'red-1': 'hsl(0, 100%, 99%)',
  'red-2': 'hsl(0, 100%, 97%)',
  'red-3': 'hsl(0, 92%, 90%)',
  'red-4': 'hsl(0, 85%, 78%)',
  'red-5': 'hsl(0, 100%, 65%)',
  'red-6': 'hsl(0, 100%, 45%)',
  'red-7': 'hsl(0, 100%, 40%)',
  'red-8': 'hsl(0, 100%, 12%)',
  'red-9': 'hsl(0, 100%, 10%)',

  'green-1': 'hsl(134, 50%, 99%)',
  'green-2': 'hsl(134, 50%, 97%)',
  'green-3': 'hsl(134, 48%, 88%)',
  'green-4': 'hsl(134, 40%, 64%)',
  'green-5': 'hsl(134, 58%, 42%)',
  'green-6': 'hsl(134, 52%, 40%)',
  'green-7': 'hsl(134, 50%, 38%)',
  'green-8': 'hsl(134, 50%, 12%)',
  'green-9': 'hsl(134, 50%, 10%)',

  'yellow-1': 'hsl(40, 100%, 99%)',
  'yellow-2': 'hsl(40, 100%, 97%)',
  'yellow-3': 'hsl(40, 92%, 88%)',
  'yellow-4': 'hsl(40, 85%, 78%)',
  'yellow-5': 'hsl(40, 90%, 50%)',
  'yellow-6': 'hsl(40, 90%, 42%)',
  'yellow-7': 'hsl(40, 100%, 35%)',
  'yellow-8': 'hsl(40, 100%, 12%)',
  'yellow-9': 'hsl(40, 100%, 10%)',
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
    'brand': [
      'Officina Serif ITC Pro',
      'Georgia', 
      'Times', 
      'Times New Roman', 
      'serif',
    ],
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
    '1': '.75rem',    // 12px
    '2': '.875rem',   // 14px
    '3': '1rem',      // 16px
    'base': '1rem',   // 16px
    '4': '1.125rem',  // 18px
    '5': '1.25rem',   // 20px
    '6': '1.5rem',    // 24px
    '7': '1.875rem',  // 30px
    '8': '2.25rem',   // 36px
    '9': '3rem',      // 48px
  },

  fontWeights: {
    'thin': 100,
    'normal': 400,
    'bold': 700,
  },

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },

  textColors: colors,

  backgroundColors: colors,

  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },

  borderWidths: {
    '0': '0',
    default: '1px',
    '1': '1px',
    '2': '2px',
  },

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },

  width: {
    'auto': 'auto',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
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
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    'full': '100%',
    'screen': '100vh'
  },

  minWidth: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
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
    'screen': '100vw',
  },

  minHeight: {
    '0': '0',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
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
    'sm': '0 1px 2px 0 rgba(0,0,0,0.08)',
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'lg': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'xl': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'none': 'none',
  },

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '1': 100,
    '2': 200,
    '3': 300,
    '4': 400,
    '5': 500,
    '6': 600,
    '7': 700,
    '8': 800,
    '9': 900,
  },

  opacity: {
    '0': '0',
    '1': '.1',
    '2': '.2',
    '3': '.3',
    '4': '.4',
    '5': '.5',
    '6': '.6',
    '7': '.7',
    '8': '.8',
    '9': '.9',
    'full': '1',
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

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

  plugins: [
    require('./plugins/container')(),
  ],

}
