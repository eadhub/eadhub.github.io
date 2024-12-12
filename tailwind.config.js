/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],  // scan all HTML and JS files in any folder
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

