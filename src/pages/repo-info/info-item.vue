<template lang="pug">
  .info-item.flex-c-tc
    icon(:name='icon')
    span {{label}}
</template>

<script>
export default {
  name: 'info-item',
  props: ['icon', 'label']
}
</script>

<style lang="less">
.info-item {
  padding: 4px 0;
}
</style>