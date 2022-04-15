module.exports = {
  mode: 'jit',
  content: {
    files: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        favicon: "url( './favicon.png')",
      }),
      colors: {
        'orange-custom': '#FBA239',
        'red-custom': '#DE4527',
        'green-custom': '#209678',
        'blue-custom': '#2EBFD2',
        'gray-custom': '#737373',
        'grey-light': '#eeeeee',
        'grey-charcoal': '#202020',
        'grey-dark': '#464646',
        'grey-coin': '#C4C4C4',
        'grey-pebble': '#979797',
        'grey-fossil': '#9CA3AF',
        'grey-silver': '#E2E8F0',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
