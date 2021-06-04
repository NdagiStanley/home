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
    <div v-for="year in years" :key="year.id">
      <h3>{{ year }}</h3>
      <div>
        <hr>
          <div v-for="post in posts(year)" :key="post.id">
            <a :href="post.path">{{ post.title }}</a>
            <p>{{post.frontmatter.description}}</p>
          </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import { mixin } from '../mixin'

export default {
  mixins: [mixin],
  data() {
    return {
      years: [2021, 2020, 2019, 2018, 2017]
    }
  },
  mounted () {
    console.log('%c mixin ', 'background-color: #808080', this.posts)
  },
}

</script>
