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
        hid: 'hubspot',
        id: 'hs-script-loader',
        src: 'https://js-eu1.hs-scripts.com/25686834.js',
        defer: true,
        async: true,
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
      },
    ],
  },
  publicRuntimeConfig: {
    BASE_ID: process.env.BASE_ID,
    API_KEY: process.env.API_KEY,
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      'Open Sans': true,
    },
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      'Nunito sans-serif': true,
      'Open Sans sans-serif': true,
    },
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
