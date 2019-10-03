<template lang="pug">
  .user-item.bg-white
    .user-item__hd
      author-photo(:img='img')
    .user-item__bd
      .user-item__bd-top
        p {{author}}
      .user-item__bd-middle
        icon(name='book-outline')
        span {{name}}
      .user-item__bd-dowm
        span {{desc}}
</template>

<script>
export default {
  name: 'user-item',
  props: ['img', 'author', 'name', 'desc']
}
</script>

<style lang="less">
.user-item {
  display: flex;
  margin: 10px;
  padding: 10px 20px;
}
</style>