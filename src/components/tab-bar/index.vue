<template lang="pug">
  .tab-bar.flex.bg-white
    tab-bar-item(v-for='(item,index) in items'
      v-bind='item' :key='index' :isActive='index===activeIndex'
      @click='onActive(index)')
</template>

<script>
import TabBarItem from './tab-bar-item'
export default {
  name: 'tab-bar',
  props: ['items', 'activeIndex'],
  methods: {
    onActive(index) {
      this.$emit('active', index)
    }
  },
  components: {
    TabBarItem
  }
}
</script>

<style lang="less">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>