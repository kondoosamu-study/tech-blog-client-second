require('dotenv').config();
const { BASE_URL, BROWSER_BASE_URL, MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_PORT, MYSQL_DB_NAME, GOOGLE_ANALYTICS_ID, SERVER_PORT, SERVER_HOST, SITE_TITLE } = process.env;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ok-engineering.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:
        `${process.env.SITE_TITLE}では日々の実務と学習で得た知見や実装時に困った技術に関してまとめています。` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/firebase.js' },
    { src: '@/plugins/toast', mode: 'client' },
    // { src: '~plugins/ga.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // moment
    '@nuxtjs/moment',
    // Google Analytics
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // Font Awesome
    'nuxt-fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    browserBaseURL: process.env.BROWSER_BASE_URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Server configuration
  // serverMiddleware: ['~/server'],

  // env configuration
  env: {
    BASE_URL,
    BROWSER_BASE_URL,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_PORT,
    MYSQL_DB_NAME,
    GOOGLE_ANALYTICS_ID,
    SERVER_PORT,
    SERVER_HOST,
    SITE_TITLE,
  },

  // Font Awesome configuration
  fontawesome: {
    imports: [{
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    }]
  },

  // Moment Configuration
  moment: { locales: ['ja'] },

  // Google Analytics Configuration
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Server Configuration
  server: {
    port: process.env.SERVER_PORT,
    host: process.env.SERVER_HOST,
  },

  // Error handling for unsafe-inline and sha256
  // render: {
  //   csp: {
  //     hashArgorism: 'sha256',
  //     policies: {
  //       'script-src': [
  //         "'sha256-4RS22DYeB7U14dra4KcQYxmwt5HkOInieXK1NUMBmQI='" // this line resolves the violation
  //         // "'sha256-gv8e6l0LKMUPkcrpwLKlKFWopGfQcHwvAXKdXXERR5A='" // this line resolves the violation
  //       ]
  //     }
  //   }
  // },
}
