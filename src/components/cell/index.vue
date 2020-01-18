<template lang="pug">
  .cell.flex-r-lc.tap-highlight
    icon(v-if='name' :name='name')
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
  &:active {
    background-color: #ededed;
  }
  .cell-bd {
    padding-left: 8px;
  }
}
</style>