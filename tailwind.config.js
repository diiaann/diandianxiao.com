module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-graphik)'],
        serif: ['var(--font-garamond)'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      gray: {
        100: '#eef1f4',
        200: '#dadde0',
        300: '#C6C9CC',
        400: '#b2b5b8',
        500: '#9ea1a4',
        600: '#8a8d90',
        700: '#76797c'
      },
      vermillion: {
        100: '#ffae82',
        200: '#ff9a6e',
        300: '#ee865a',
        400: '#DA7246',
        500: '#c65e32',
        600: '#b24a1e',
        700: '#9e360a',
        800: '#8a2200'
      },
      forest: {
        100: '#859185',
        200: '#717d71',
        300: '#5d695d',
        400: '#495549',
        500: '#354135',
        600: '#212d21',
        700: '#0d190d'
      },
      sage: {
        100: '#F0F6EF',
        200: '#dce2db',
        300: '#c8cec7',
        400: '#b4bab3',
        500: '#a0a69f',
        600: '#8c928b',
        700: '#787e77'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
