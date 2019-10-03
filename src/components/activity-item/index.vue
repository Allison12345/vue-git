<template lang="pug">
  .activity-item.bg-white
    .activity-item__hd
      author-photo(:img='img')
    .activity-item__bd
      .activity-item__bd-top
        p {{author}} started {{name}}
      .activity-item__bd-dowm
        span {{days}}
</template>

<script>
export default {
  name: 'activity-item',
  props: ['img', 'author', 'name', 'days']
}
</script>

<style lang="less">
.activity-item {
  display: flex;
  margin: 10px;
  padding: 10px 20px;
}
</style>
