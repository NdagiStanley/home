const { description } = require('../../package')
const isProd = process.env.NODE_ENV === 'production'
const { path, fs } = require('@vuepress/utils')

var posts = []
const postsDir = path.resolve(__dirname, '../posts')
const postsFiles = fs.readdirSync(postsDir);
for (const file of postsFiles)
  posts.unshift(file)

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
        text: 'Blog',
        link: '/posts/'
      },
      {
        text: 'About',
        link: '/about/'
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
    ],
    sidebar: {
      '/posts/': [
        {
          isGroup: true,
          text: 'Posts',
          children: posts
        }
      ]
    },
  },
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
}
