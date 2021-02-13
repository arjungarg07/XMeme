module.exports = {
  purge: ['./src/components/**/*.js','./public/index.html','./src/App.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    fontFamily: {
      'sans': ['-apple-system'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
