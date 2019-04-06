require('dotenv').config()

// eslint-disable-next-line nuxt/no-cjs-in-config
const pkg = require('./package')
// eslint-disable-next-line nuxt/no-cjs-in-config
const client = require('./plugins/contentful')

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        integrity:
          'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~assets/scss/main.scss', 'animate.css/animate.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/disqus',
    {
      src: '~/plugins/vue-lazyload',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: []
  },

  /*
  ** Markdownit configuration
  */

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: 'post'
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: entry.fields.slug,
              payload: entry
            }
          })
        })
    }
  }
}
