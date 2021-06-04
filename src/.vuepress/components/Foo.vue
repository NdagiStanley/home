<template>
  <div>
    <div>
      <h3>
        Posts, tutorials, snippets, musings, notes, and everything else.
      </h3>
      <h4>
        My penstrokes consolidated.
      </h4>
    </div>

    <hr>
    <!-- {{ allPosts }} -->
    <hr>
    <div v-for="year in years" :key="year.id">
      <h3>{{ year }}</h3>
        <div>
          <hr>
        </div>
    </div>
  </div>
</template>
<script>
import { useSiteData, usePageData } from '@vuepress/client'
import { path } from '@vuepress/utils'

export default {
  data() {
    return {
      years: [2021, 2020, 2019, 2018, 2017],
    }
  },
  computed: {
    siteData () {
      return useSiteData()
    },
    pageData () {
      return usePageData()
    },
  },
  mounted () {
    console.log('mounted');
    // var posts = []
    const postsDir = path.resolve(__dirname)
    console.log(postsDir);
      // const postsFiles = fs.readdirSync(postsDir);
      // for (const file of postsFiles)
      //   posts.unshift(file)
      // return posts
  },
}
</script>
