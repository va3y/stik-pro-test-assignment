export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Test Assignment',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon-16.ico',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon-32.ico',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon-96.ico',
        sizes: '96x96',
      },
      // fireпfox всегда грузит 192 как самую большую и получается не очень
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/favicon-192.ico',
      //   sizes: '192x192',
      // },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/default.css', '~/assets/styles/animations.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },
}
