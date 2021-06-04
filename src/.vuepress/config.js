const { description } = require('../../package')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  lang: 'en-US',
  title: 'Ndagi Stanley',
  description: description,

  head: [
    ['link', { rel: 'icon', type: "image/png", href: '/he_.png' }]
  ],

  bundler:
    // use vite in dev, use webpack in prod
    (isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   */
  themeConfig: {
    logo: 'he_.png',
    navbar: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Blog',
        link: 'https://blog.stanmd.tk',
        target: '_blank'
      },
      {
        text: 'Code',
        link: 'https://code.stanmd.tk',
        target: '_blank'
      },
      {
        text: 'TechK/n',
        link: 'https://techkln.org',
        target: '_blank'
      }
    ]
  }
}
