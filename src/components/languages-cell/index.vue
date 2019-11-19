<template lang="pug">
  .languages-cell.bg-white {{label}}
</template>
<script>
export default {
  name: 'languages-cell',
  props: ['label']
}
</script>
<style lang="less">
</style>
<style lang="less">
.languages-cell {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 4px;
  padding: 6px;
  font-size: 16px;
}
</style>