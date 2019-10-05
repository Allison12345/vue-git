<template lang="pug">
  .page.bg.full
    slot
</template>

<script>
export default {
  name: 'page'
}
</script>

<style lang="less">
.page {
  overflow-y: scroll;
}
</style>