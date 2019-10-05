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
        user: 'Allison',
        activity:
          Math.random() > 0.5
            ? 'created'
            : 'created created created created created created',
        repo: 'vue-git',
        date: '5 dags ago'
      }))
    }
  }
}
</script>