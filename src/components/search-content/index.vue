<template lang="pug">
  .search-content
    .search-content__item.inline-block(v-for='(item,index) in searchValue ' :key='index' ) {{item}}
</template>

<script>
export default {
  name: 'search-content',
  props: ['searchValue']
}
</script>

<style lang="less">
.search-content {
  .search-content__item {
    margin-top: 10px;
    margin-left: 6px;
    padding: 0 10px;
    background-color: #fff;
    color: #5353f1;
    border: 1.3px solid #5353f1;
    border-radius: 10px;
  }
}
</style>