<template lang="pug">
  .repo
    repo-item(v-for='(item,index) in items' v-bind='item' :key='index' @click.native='onClick(index)')
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
    onClick(index) {
      console.log(index)
      this.$router.push('/repo-info')
    }
  }
}
</script>