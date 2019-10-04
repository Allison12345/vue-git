<template lang="pug">
  .cell.flex
    .cell-bd.flex-1  {{label}}
    .cell-ft(v-html='ft')
      slot
</template>

<script>
export default {
  name: 'cell',
  props: ['label', 'ft']
}
</script>

<style lang="less">
.cell {
  padding: 8px 10px;
}
</style>