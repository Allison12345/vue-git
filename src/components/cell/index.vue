<template lang="pug">
  .cell.flex.tap-highlight
    icon.flex-r-lc(v-if='name' :name='name')
    .cell-bd.flex-1  {{label}}
    .cell-ft.flex-r-lc(v-html='ft')
      slot
</template>

<script>
export default {
  name: 'cell',
  props: ['name', 'label', 'ft']
}
</script>

<style lang="less">
.cell {
  padding: 8px 10px;
}
</style>