// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  app: {
    baseURL: '/nuxt3-gh-pages/',
    head: {
      title: 'Nuxt3-gh-pages',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt3-gh'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [],
      script: [],
      style: [],
      noscript: []
    }
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  telemetry: false
});
