import { path, fs } from '@vuepress/utils'

export const mixin = {
  computed: {
    allPosts() {
      var posts = []
      const postsDir = path.resolve(__dirname, '../posts')
      const postsFiles = fs.readdirSync(postsDir);
      for (const file of postsFiles)
        posts.unshift(file)
      return posts
    }
  }
}
