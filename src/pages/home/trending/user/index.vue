<template lang="pug">
  scroller-y
    user-item(v-for='(item,index) in items' v-bind='item' :key='index' @click.native='onClick(item)')
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      items: new Array(14).fill(0).map(() => ({
        img: require('@/assets/imgs/allison.png'),
        author: 'Allison',
        name: 'vue-git',
        desc: new Array(Math.random() > 0.5 ? 5 : 30)
          .fill(0)
          .map(() => 'a')
          .join(' ')
      }))
    }
  },
  methods: {
    onClick(item) {
      console.log(item)
      const author = item.author,
        name = item.name
      this.$router.push({ path: '/user-info', query: { author, name } })
    }
  }
}
</script>