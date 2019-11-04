<template lang="pug">
  .mask-page
    slot
</template>
<script>
export default {
  name: 'mask-page'
}
</script>
<style lang="less">
.mask-page {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
</style>