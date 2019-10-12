<template lang="pug">
  .view-code-item
    cells
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
  .cells {
    margin: 10px 10px;
  }
}
</style>