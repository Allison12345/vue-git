<template lang="pug">
  .activity
    activity-item(v-for='(item,index) in items' v-bind='item' :key='index')
</template>

<script>
export default {
  name: 'activity',
  data() {
    return {
      items: new Array(14).fill(0).map(() => ({
        img: require('@/assets/imgs/allison.png'),
        author: 'Allison',
        name: 'vue-git',
        days: '5 dags ago'
      }))
    }
  }
}
</script>