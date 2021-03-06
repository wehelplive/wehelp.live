import { resolve } from 'pathe'
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
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap',
      },
    ],
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'Services',
        path: '/services/:location?/:service?/',
        file: resolve(__dirname, 'pages/services/index.vue'),
      })
    },
  },
  publicRuntimeConfig: {
    BASE_ID: 'appBBi7Uoylg0ILTk',
    API_KEY: 'keydEXl97LFVx03hM',
  },
  googleFonts: {
    display: 'swap',
    families: {
      'Open Sans': true,
    },
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
  buildModules: ['@intlify/nuxt3', '@nuxtjs/google-fonts'],
  intlify: {
    locale: 'en',
    fallbackLocale: 'en',
    localeDir: 'locales',
    vueI18n: {},
  },
})
