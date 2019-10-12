<template lang="pug">
  .issue-item.flex.bg-white
    .issue-item__hd
      icon(:name='name')
    .issue-item__bd
      .issue-item__bd-top {{title}}
      .issue-item__bd-bottom {{commitNumbers}} comments
      .issue-item__bd-down # {{openNumbers}} opened {{timeNumbers}} {{time}}(s) ago by {{author}}
</template>

<script>
export default {
  name: 'issues-item',
  props: [
    'name',
    'title',
    'commitNumbers',
    'openNumbers',
    'timeNumbers',
    'time',
    'author'
  ]
}
</script>
<style lang="less">
.issue-item {
  margin: 10px 20px;
}
</style>