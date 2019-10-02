<template lang="pug">
  .full
    router-view
    nav-bar(:items='navItems' :activeIndex='navActiveIndex' @active='onNavActive')
</template>

<script>
export default {
  name: 'trending',
  data() {
    return {
      navItems: [
        { label: 'REPO', path: '/home/trending/repo' },
        { label: 'USER', path: '/home/trending/user' }
      ],
      navActiveIndex: 0
    }
  },
  methods: {
    onNavActive(index) {
      this.navActiveIndex = index
      this.$router.replace(this.navItems[index].path)
    }
  }
}
</script>