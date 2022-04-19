import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['tailwindcss/tailwind.css'],
  googleFonts: {
    display: 'swap',
    families : {
      'Nunito': true,
    },
  },
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
