<template lang="pug">
  .user
    user-item(v-for='(item,index) in items' v-bind='item' :key='index')
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      items: new Array(14).fill(0).map(() => ({
        img: require('@/assets/imgs/allison.png'),
        author: 'Allison',
        name: 'vue-git',
        desc:
          Math.random() > 0.5
            ? 'skjdhflkjdbfs'
            : 'sikjhefilawuehfkmjdbfksdjfns,djnfksjdbfk'
      }))
    }
  }
}
</script>