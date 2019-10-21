<template lang="pug">
  .contributor-item.bg-white.flex-r-lc
    .contributor-item__hd
      author-photo(:img='img')
    .contributor-item__bd {{author}}
</template>
<script>
export default {
  name: 'contributor-item',
  props: ['img', 'author']
}
</script>
<style lang="less">
.contributor-item {
  margin: 0 10px 10px;
  padding: 10px 0;
  .contributor-item__hd {
    padding: 0 10px;
  }
}
</style>