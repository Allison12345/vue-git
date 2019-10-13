<template lang="pug">
  .nav-item.flex-1.txt-center(href='javascript:;' @click='onClick' :class='{active:isActive}')
    p.nav-item-label {{label}}
</template>

<script>
export default {
  name: 'nav-bar-item',
  props: ['label', 'isActive'],
  methods: {
    onClick(e) {
      e.preventDefault(e)
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less">
.nav-item {
  color: #333333;
  padding: 10px;
  &.active {
    color: rgb(121, 119, 253);
  }
}
</style>