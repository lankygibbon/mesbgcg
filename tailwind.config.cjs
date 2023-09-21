/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      aspectRatio: {
        'mtg': '7 / 5',
        'mtg-dbl': '7 / 5',
      },
    },
  },
  plugins: [],
}
