<template lang="pug">
  page
    router-view
    tab-bar(:items='items' :activeIndex='activeIndex' @active='onActive')
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      items: [
        { icon: 'trending-up-outline', label: '趋势', path: '/home/trending' },
        { icon: 'cube-outline', label: '动态', path: '/home/activity' },
        { icon: 'person-outline', label: '我', path: '/home/me' }
      ],
      activeIndex: 0
    }
  },
  methods: {
    onActive(index) {
      this.activeIndex = index
      this.$router.replace(this.items[index].path)
    }
  }
}
</script>