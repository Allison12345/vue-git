<template lang="pug">
  page
    activity-item(v-for='(item,j) in eventItems' :key='j' v-bind='item' )
</template>
<script>
export default {
  name: 'events',
  data() {
    return {
      eventItems: new Array(14).fill(0).map(() => ({
        img: require('@/assets/imgs/allison.png'),
        user: 'Allison',
        author: 'sjdf',
        name: 'ksjdf',
        activity: 'created',
        date: '5 dags ago'
      }))
    }
  }
}
</script>