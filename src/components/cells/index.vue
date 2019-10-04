<template lang="pug">
  .cells.bg-white
    slot
</template>

<script>
export default {
  name: 'cells'
}
</script>

<style lang="less">
.cells {
  margin: 10px 20px;
  border-radius: 4px;
}
</style>