<template lang="pug">
page
  scroller-y
    repo-item(v-for='(item,index) in items' v-bind='item' :key='index' @click.native='onClick(item)')
    .ft
      .picker-button(@click='isShown = !isShown') Month & JavaScript
  picker(v-if='isShown' @cancel='isShown = false' @comfrim='isShown = false'
  :pickItems='pickItems')
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
      })),
      isShown: false,
      pickItems: [
        ['Today', 'Week', 'Month', 'a', 'g'],
        ['All', 'HTML', 'Javascript', 'h', 'h']
      ]
    }
  },
  methods: {
    onClick(item) {
      const author = item.author,
        name = item.name,
        desc = item.desc
      console.log(author, name, desc)
      this.$router.push({ path: '/repo-info', query: { author, name, desc } })
    },
    onShown() {
      this.$router.push('picker')
    }
  }
}
</script>
<style lang="less">
.ft {
  position: fixed;
  background-color: rgb(24, 24, 233);
  border-radius: 40px;
  margin-top: 20px;
  bottom: 80px;
  left: 80px;
  right: 80px;
  opacity: 50%;
  text-align: center;
  .picker-button {
    color: white;
    padding: 5px 15px;
  }
}
</style>