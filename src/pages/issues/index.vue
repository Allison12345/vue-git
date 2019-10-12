<template lang="pug">
  .issues.full.bg
    nav-bar(:items='navbarItems' :activeIndex='navActiveIndex' @active='onActive')
    router-view
</template>

<script>
export default {
  name: 'issues',
  data() {
    return {
      navbarItems: [
        { label: '开启', path: '/issues/open' },
        { label: '关闭', path: '/issues/closed' }
      ],
      navActiveIndex: 0
    }
  },
  methods: {
    onActive(index) {
      this.navActiveIndex = index
      this.$router.replace(this.navbarItem[index].path)
    }
  }
}
</script>