<template lang="pug">
  .activity-item.flex-r-lc.bg-white
    .activity-item__hd
      author-photo(:img='img')
    .activity-item__bd.flex-c-sb
      .activity-item__bd-top(v-if='repo') {{user}} {{activity}} {{repo}}
      .activity-item__bd-top(v-if='author')
        div {{user}} {{activity}}
        div {{author}}/{{name}}
      .activity-item__bd-dowm {{date}}
</template>

<script>
export default {
  name: 'activity-item',
  props: ['img', 'user', 'activity', 'repo', 'author', 'name', 'date']
}
</script>

<style lang="less">
.activity-item {
  margin: 0 10px 10px;
  padding: 10px 0;
  .activity-item__hd {
    padding: 10px;
  }
  .activity-item__bd {
    .activity-item__bd-top {
      margin-bottom: 10px;
    }
  }
}
</style>
