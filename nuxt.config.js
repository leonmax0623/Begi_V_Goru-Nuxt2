export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.scss',
    'swiper/swiper-bundle.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/api.js' },
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/global.js' },
    { src: '@/plugins/vuelidate.js', ssr: true },
    { src: '@/plugins/vIntersection.js', ssr: false },
    { src: '@/plugins/vClickOutside.js', ssr: false },
    { src: '@/plugins/vueAwesomeSwiper.js', ssr: false },
    { src: '@/plugins/yandexMaps.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    [
      'nuxt-mq',
      {
        // defaultBreakpoint: '',
        breakpoints: {
          xl: 1684,
          lg: 1024,
          md: 768
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://217.107.219.139:8090/api',
  },

  styleResources: {
    scss: [
      '~/assets/css/_variables.scss',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0'
  },

  // static build
  target: 'static'
}
