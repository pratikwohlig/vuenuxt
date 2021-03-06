require('dotenv').config();
// let secureEnv = require('secure-env');
// process.env = secureEnv({secret:'nuxt_test123'});
module.exports = {
  // router: {
  //   middleware: 'auth'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['bootstrap/dist/css/bootstrap.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/dotenv',
  ],
  plugins: [
    { src: '~plugins/vee-validate.js' }
  ],

  build: {
    vendor: ['jquery', 'bootstrap', 'vee-validate'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

