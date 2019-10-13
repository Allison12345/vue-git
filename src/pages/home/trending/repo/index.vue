<template lang="pug">
  scroller-y
    repo-item(v-for='(item,index) in items' v-bind='item' :key='index' @click.native='onClick(item)')
</template>

<script>
export default {
  name: 'repo',
  data() {
    return {
      items: new Array(10).fill(0).map(() => ({
        author: 'tom',
        name: 'vue-git',
        desc: 'kjsdhkfjsbdcmsbmdjfjs',
        langColor: 'blue',
        lang: 'javascript',
        stars: '100',
        forks: '3434',
        todayStars: '48'
      }))
    }
  },
  methods: {
    onClick(item) {
      const author = item.author,
        name = item.name,
        desc = item.desc
      console.log(author, name, desc)
      this.$router.push({ path: '/repo-info', query: { author, name, desc } })
    }
  }
}
</script>