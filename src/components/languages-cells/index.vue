<template lang="pug">
  .languages-cells
    .languages-cells__hd {{item.word}}
    languages-cell(v-for='(i,index) in item.label' :key='index' 
    :label='i' @click='onChoose(index)')
</template>
<script>
import LanguagesCell from './languages-cell'
export default {
  name: 'languages-cells',
  props: ['item', 'cellsIndex'],
  methods: {
    onChoose(index) {
      this.$emit('choose', this.cellsIndex, index)
    }
  },
  components: {
    LanguagesCell
  }
}
</script>
<style lang="less">
.languages-cells {
  margin: 0;
  padding: 0;
  .languages-cells__hd {
    margin: 0 4px;
    padding: 6px 0;
    background-color: #ededed;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>