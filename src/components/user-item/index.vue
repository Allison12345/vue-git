<template lang="pug">
  .user-item.bg-white
    .user-item__hd
      author-photo(:img='img')
    .user-item__bd.flex-c-sb
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
  padding: 10px 5px;
  .user-item__hd {
    padding: 10px;
  }
  .user-item__bd {
    .user-item__bd-dowm {
      margin-bottom: 10px;
    }
  }
}
</style>