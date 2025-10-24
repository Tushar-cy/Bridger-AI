// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- This is the change
    'autoprefixer': {},
  },
}