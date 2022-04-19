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
      fontFamily:{
        Nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        favicon: "url( './favicon.png')",
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
