const pkg = require('./package'),
routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-coffee-shop/'
  }
} : {}

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.2/css/all.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/lightbox'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  ...routerBase,
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
