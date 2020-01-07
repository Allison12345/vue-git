<template lang="pug">
  p.languages-cell.bg-white(@click='onClick') {{label}}
</template>
<script>
export default {
  name: 'languages-cell',
  props: ['label'],
  methods: {
    onClick(e) {
      e.preventDefault()
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less">
.languages-cell {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 4px;
  padding: 6px;
  font-size: 16px;
}
p:active {
  background-color: #ededed;
}
</style>