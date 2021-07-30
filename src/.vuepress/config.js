const { description } = require('../../package')
const isProd = process.env.NODE_ENV === 'production'
const { path } = require('@vuepress/utils')

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
        link: '/me/'
      },
      {
        text: 'Blog',
        link: 'https://blog.stanmd.tk',
        target: '_blank'
      },
      {
        text: 'Code',
        link: 'https://github.com/NdagiStanley',
        target: '_blank'
      },
      {
        text: 'Et al (Others)',
        children: [
          {
            text: 'Career',
            link: 'https://www.linkedin.com/in/ndagistanley',
            target: '_blank'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/NdagiStanley',
            target: '_blank'
          },
        ]
      },
      {
        text: 'TechK/n',
        link: 'https://techkln.org',
        target: '_blank'
      }
    ],
    themePlugins: {
      // disable git plugin
      git: false,
    },
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-V99YX9YJ1V',
      },
    ],
    ['@vuepress/plugin-pwa'],
    ['@vuepress/plugin-pwa-popup']
  ]
}
