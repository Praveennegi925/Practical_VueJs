import  Locales from "./localization.json";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'product-negotiation-b2c',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet',type:'text/css' , href:'/css/style.css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios',
  { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/router'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL:'https://65e8-182-69-180-38.in.ngrok.io',
    browserBaseURL:'https://65e8-182-69-180-38.in.ngrok.io'
  },
  proxy: {
    '/api/':'https://65e8-182-69-180-38.in.ngrok.io'
  },
  i18n: {
    locales: ['de','en', 'fr'],
    defaultLocale: process.env.VUE_APP_I18N_LOCALE || 'en',
    vueI18n: {
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
      messages: Locales
    },
    skipSettingLocaleOnNavigate: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.resolve.alias.vue$ = require.resolve('vue/dist/vue.esm.js')
      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      // vueLoader.options.transformToRequire['img'] = ['src', 'data-src']
    }
  },

   build: {
     babel: {
      compact: true,
     },
  },
  server: {
    port: 3001 // default: 3000
  },
  generate: {
    routes: [
    '/'
    ]
  }

}
