<template lang="pug">
  a.tab-item.flex-1.txt-center(href='javascript:;' @click='onClick' :class='{active:isActive}')
    icon(:name='icon')
    p.tab-item-label {{label}}
</template>

<script>
export default {
  name: 'tar-bar-item',
  props: ['icon', 'label', 'isActive'],
  methods: {
    onClick(e) {
      e.preventDefault()
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less">
.tab-item {
  color: #333;
  &.active {
    color: rgb(121, 119, 253);
  }
}
</style>