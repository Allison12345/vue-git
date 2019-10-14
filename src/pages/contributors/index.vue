<template lang="pug">
  page
    contributor-item(v-for='(item,j) in contributorItems' v-bind='item' :key='j')
</template>
<script>
export default {
  name: 'contributors',
  data() {
    return {
      contributorItems: new Array(14).fill(0).map(() => ({
        img: require('@/assets/imgs/allison.png'),
        author: 'sjdf'
      }))
    }
  }
}
</script>