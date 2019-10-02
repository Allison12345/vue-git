<template lang="pug">
  page
    router-view
    tab-bar(:items='tabItems' :activeIndex='tabActiveIndex' @active='onTabActive')
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      tabItems: [
        { icon: 'trending-up-outline', label: '趋势', path: '/home/trending' },
        { icon: 'cube-outline', label: '动态', path: '/home/activity' },
        { icon: 'person-outline', label: '我', path: '/home/me' }
      ],
      tabActiveIndex: 0
    }
  },
  methods: {
    onTabActive(index) {
      this.tabActiveIndex = index
      this.$router.replace(this.tabItems[index].path)
    }
  }
}
</script>