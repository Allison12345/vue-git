<template lang="pug">
  .languages-cells__top tips: Click to delete
    .languages-cells-content
      .languages-cells-item.inline-block(v-for='(item,index) in clickItems ' :key='index' 
    @click='onDeleteItem(index)') {{item}}
</template>
<script>
export default {
  name: 'languages-cells__top',
  props: ['clickItems'],
  methods: {
    onDeleteItem(index) {
      console.log(index)
      this.$emit('deleteItem', index)
    }
  }
}
</script>
<style lang="less">
.languages-cells__top {
  top: 0;
  width: 100%;
  background-color: #ededed;
  padding: 4px;
  .languages-cells-content {
    padding-right: 40px;
    .languages-cells-item {
      margin-top: 10px;
      margin-left: 6px;
      padding: 0 10px;
      background-color: #fff;
      color: #5353f1;
      border: 1.3px solid #5353f1;
      border-radius: 10px;
    }
  }
}
</style>