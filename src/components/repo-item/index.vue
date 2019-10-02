<template lang="pug">
  .repo-item.bg-white
    .repo-item__hd
      icon(name='book-outline')
      span {{author}}/{{name}}
    .repo-item__bd {{desc}}
    .repo-item__ft
      .repo-item__ft-up
        code-lang(:color='langColor' :code='lang')   
        span
          icon(name='star')
          span {{stars}}
        span
          icon(name='shuffle-2')
          span {{forks}}
      .repo-item__ft-down
        icon.txt-red(name='star')
        span.txt-red {{todayStars}}
</template>

<script>
export default {
  name: 'repo-item',
  props: [
    'author',
    'name',
    'desc',
    'langColor',
    'lang',
    'stars',
    'forks',
    'todayStars'
  ]
}
</script>

<style lang="less">
.repo-item {
  margin: 10px;
  padding: 10px 20px;
  .repo-item__bd {
    margin: 5px 0;
  }
  .repo-item__ft {
    .repo-item__ft-up {
      & > span {
        margin-right: 30px;
      }
    }
  }
}
</style>