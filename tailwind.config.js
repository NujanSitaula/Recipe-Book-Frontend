/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
      
  ],
  theme: {
    extend: {
      colors:
          {
                'primary': {
                 100: '#DB2B39',
                 200: '#c12432',
                 300: '#FFEAEA',

                },
                'accent': {
                  100: '#FEDD01'
                },
                'secondary': {
                    100: '#062534',
                    200: '#888883',
                },
          }
    },
  },
  plugins: [
    require('preline/plugin'),

  ],
}

