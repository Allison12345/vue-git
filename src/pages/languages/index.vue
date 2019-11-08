<template lang="pug">
  page
    languages-cells(v-for='(i,index) in languagesItems ' :key='index' :item='i')
</template>
<script>
export default {
  name: 'languages',
  data() {
    return {
      languagesItems: new Array(20)
        .fill(0)
        .map(() => ({ word: 'a', label: ['df', 'sf', 'sdf', 'sdf', 'sdf'] }))
    }
  }
}
</script>