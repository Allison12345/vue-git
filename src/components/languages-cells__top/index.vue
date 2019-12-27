<template lang="pug">
  .languages-cells__top tips: Click to delete
    .languages-cells-content.flex
      div.languages-cells-item.flex(v-for='(item,index) in clickItems ' :key='index' 
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
  height: 60px;
  background-color: #ededed;
  .languages-cells-content {
    .languages-cells-item {
      border: 1px solid;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      margin-top: 10px;
      margin-left: 6px;
      padding: 0 6px;
      background-color: #fff;
      color: #5353f1;
      border: 1xp solid;
      border-color: #5353f1;
      border-radius: 8px;
    }
  }
}
</style>