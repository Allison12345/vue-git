<template lang="pug">
  .word-cells.flex-c-tc
    .word-cell(v-for='(item, index) in wordItems' :key='index' @click='onWord(item, index)') {{item}}
</template>
<script>
export default {
  name: 'word-cells',
  props: ['wordItems'],
  methods: {
    onWord(item, index) {
      console.log(item)
      this.$emit('onActiveWord', item, index)
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