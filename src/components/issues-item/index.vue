<template lang="pug">
  .issue-item.flex-r-lc.bg-white
    .issue-item__hd
      icon(:name='cptIcon')
    .issue-item__bd
      .issue-item__bd-top {{title}}
      .issue-item__bd-bottom {{commitNumbers}} comments
      .issue-item__bd-down {{`#${openNumbers}`}} opened {{timeNumbers}} {{time}}(s) ago by {{author}}
</template>

<script>
export default {
  name: 'issues-item',
  props: [
    'title',
    'commitNumbers',
    'openNumbers',
    'timeNumbers',
    'time',
    'author',
    'status'
  ],
  computed: {
    cptIcon() {
      return this.status === 'closed'
        ? 'checkmark-circle-2-outline'
        : 'question-mark-circle-outline'
    }
  }
}
</script>

<style lang="less">
.issue-item {
  margin: 0 10px 10px;
  .issue-item__hd {
    padding: 10px;
  }
  .issue-item__bd {
    padding: 5px;
    .issue-item__bd-bottom {
      padding: 5px;
    }
  }
}
</style>