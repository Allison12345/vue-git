<template lang="pug">
  .view-code-item.bg-white
    cell(:name='name' :label='label' :ft='ft')
</template>

<script>
export default {
  name: 'view-code-item',
  props: ['name', 'label', 'ft']
}
</script>

<style lang="less">
.view-code-item {
  margin: 10px;
}
</style>