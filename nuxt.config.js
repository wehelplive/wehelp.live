import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['tailwindcss/tailwind.css'],
  watch: ['~/tailwind.config.js'],
  meta: {
    title: 'WeHelp – Evacuation to Europe',
    description:
      'We offer a step-by-step evacuation plan from anywhere in Ukraine to anywhere in Europe.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    script: [
      {
        hid: 'airtable',
        src: 'https://static.airtable.com/js/embed/embed_snippet_v1.js',
        defer: true,
      },
    ],
  },
  publicRuntimeConfig: {
    BASE_ID: process.env.BASE_ID,
    API_KEY: process.env.API_KEY,
  },
  build: {
    transpile: ['@heroicons/vue', '@headlessui/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
