const pkg = require('./package')

module.exports = {
  mode: 'universal',

  generate:{
    routes: [
    '/order',
    '/#features',
    '/#variants',
    '/#crowdfunding',
    '/#specs'
    ]
  },


  /*
  ** Headers of the page
  */
  head: {
    title: 'Enerjog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:400,500;'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'   
  ],
  axios: {
    baseURL: 'https://enerjog-api.herokuapp.com/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },  
  /*
  ** Build configuration
  */
  build: {
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
  },
  plugins: [
		{ src: '~/plugins/vuelidate' }
  ]
  
}

