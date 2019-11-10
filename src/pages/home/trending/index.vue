<template lang="pug">
  .full.trending
    nav-bar(:items='navItems' :activeIndex='navActiveIndex' @active='onNavActive')
    router-view
</template>

<script>
export default {
  name: 'trending',
  data() {
    return {
      navItems: [
        { label: '仓库', path: '/home/trending/repo' },
        { label: '用户', path: '/home/trending/user' }
      ],
      navActiveIndex: 0
    }
  },
  methods: {
    onNavActive(index) {
      if (this.navActiveIndex === index) return
      this.navActiveIndex = index
      this.$router.replace(this.navItems[index].path)
    }
  }
}
</script>

<style lang="less">
.trending {
  padding-top: 42px;
}
</style>