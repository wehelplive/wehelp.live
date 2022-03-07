export default {
  target: "static",
  ssr: false,
  generate: {
    fallback: true,
  },
  css: ["@/assets/css/tailwind.css"],
  buildModules: ["@nuxt/postcss8"],
  modules: ["@nuxt/content"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
