<template lang="pug">
  .nav-bar.flex.bg-white
    nav-bar-item(v-for='(item,index) in items' :key='index' 
    v-bind='items' :isActive='index===activeIndex' @click='onActive(index)')
</template>

<script>
import NavBarItem from './nav-bar-item'
export default {
  name: 'nav-bar',
  props: ['items', 'activeIndex'],
  methods: {
    onActive(index) {
      this.$emit('active', index)
    }
  },
  components: {
    NavBarItem
  }
}
</script>

<style lang="less">
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>