<template lang="pug">
  .open
    issues-item(v-for='(item,i) in openItems' v-bind='item' :key='i')
</template>

<script>
export default {
  name: 'open',
  data() {
    return {
      openItems: new Array(17).fill(0).map(() => ({
        name: 'question-mark-circle-outline',
        title: 'dkshofksdf',
        commitNumbers: 767,
        openNumbers: 87,
        timeNumbers: 8,
        time: 'day',
        author: 'Allison'
      }))
    }
  }
}
</script>
<style lang="less">
.open {
  margin-top: 42px;
}
</style>