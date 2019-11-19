<template lang="pug">
div
  .word-cells(v-for='(i,index) in wordItems' :key='index')
    .word-cell.flex-c-tc(v-for='(j,index) in i' :key='index' @click.native='onWord(j,index)') {{j}}
</template>
<script>
export default {
  name: 'word-cells',
  props: ['wordItems'],
  methods: {
    onWord(j, index) {
      console.log(j)
      this.$emit('onActiveWord', j, index)
    }
  }
}
</script>
<style lang="less">
.word-cells {
  position: fixed;
  top: 16px;
  right: 10px;
  .word-cell {
    color: rgb(83, 83, 241);
  }
}
</style>