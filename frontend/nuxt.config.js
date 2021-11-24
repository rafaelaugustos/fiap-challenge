export default {
  target: true,
  head: {
    title: 'Fiap Challeng',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  layoutTransition: 'slide',

  css: ['@/assets/base.css'],

  plugins: [
  ],

  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
  }
}
