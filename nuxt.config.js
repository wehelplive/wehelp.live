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
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      {
        hid: "airtable",
        src: "https://static.airtable.com/js/embed/embed_snippet_v1.js",
        defer: true,
      },
    ],
  },
};
