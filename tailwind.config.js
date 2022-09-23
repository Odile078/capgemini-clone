/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        brandBlue:{
          DEFAULT:"#0070ad",
          dark:"#0070ad "
        }
      }
    },
  },
  plugins: [],
  safelist:[ {
    pattern: /.*/,
  },
],
}
