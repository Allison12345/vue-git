<template lang="pug">
  scroller-y
    repo-item(v-for='(item,index) in items' v-bind='item' :key='index' @click.native='onClick(item)')
    .ft
      button(@click='onShown') Month & JavaScript
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
<style lang="less">
.ft {
  position: fixed;
  background-color: blue;
  border-radius: 40px;
  margin-top: 20px;
  bottom: 80px;
  left: 80px;
  right: 80px;
  opacity: 50%;
  text-align: center;
  button {
    color: white;
    padding: 5px 15px;
  }
}
</style>