<template lang="pug">
  .me-info-item.flex-1
    div {{value}}
    div {{label}}
</template>

<script>
export default {
  name: 'me-info-item',
  props: ['label', 'value']
}
</script>

<style lang="less">
.me-info-item {
  &.item-border-lt {
    position: relative;
    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 10px;
      bottom: 10px;
      border-left: 1px solid #ccc;
    }
  }
}
</style>