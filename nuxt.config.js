require('dotenv').config()

// eslint-disable-next-line nuxt/no-cjs-in-config
const pkg = require('./package')
// eslint-disable-next-line nuxt/no-cjs-in-config
const client = require('./plugins/contentful')

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  ssr: true,
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Thomas Indrias | Frontend Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        property: 'og:title',
        content: 'Thomas Indrias | Frontend Engineer'
      },
      {
        hid: 'description',
        property: 'og:description',
        content: pkg.description
      },
      {
        hid: 'image',
        property: 'og:image',
        content: '/logo.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  meta: {
    ogTitle: false,
    ogDescription: false
  },

  /**
   * Nuxt "environment" variables
   * https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
   */
  publicRuntimeConfig: {
    // Variables exposed to frontend and backend
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
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
    {
      src: '~/plugins/contentful',
      ssr: false
    },
    {
      src: '~/plugins/vue-lazyload',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      ssr: false
    },
    {
      src: '~/plugins/fonts.js',
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
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-purgecss'
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: []
  },

  /*
  ** webfont configuration
  */
  webfontloader: {
    google: {
      families: [
        'Roboto:100,200,300,400,500,600,700,900',
        'Lato:100,200,300,400,500,600,700,900',
        'Sree Krushnadevaraya'
      ]
    },
    custom: {
      families: ['Font Awesome 5 Icons:400,900', 'Font Awesome 5 Brands:400'],
      urls: ['//use.fontawesome.com/releases/v5.8.1/css/all.css']
    }
  },

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
    fallback: true,
    routes: () => {
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
