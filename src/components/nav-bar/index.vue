<template lang="pug">
  .nav-bar.flex-1.flex-r-lc.bg-white
    icon(name='options-2-outline')
    nav-bar-item(v-for='(item,index) in items' :key='index' 
    v-bind='item' :isActive='index===activeIndex' @click='onActive(index)')
    icon(name='search-outline')
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
  .eva-options-2-outline {
    width: 50px;
    text-align: center;
  }
  .eva-search-outline {
    width: 50px;
    text-align: center;
  }
}
</style>