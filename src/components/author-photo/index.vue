<template lang="pug">
  .author-photo(:style='{backgroundImage: `url(${img})`}')
</template>

<script>
export default {
  name: 'author-photo',
  props: ['img']
}
</script>

<style lang="less">
.author-photo {
  width: 50px;
  height: 50px;
  background-size: cover;
}
</style>