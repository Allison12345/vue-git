<template lang="pug">
  page.bg-white
    .search
      search-bar(@input='onInputChange')
      search-content(:searchValue='searchValue')
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
      searchValue: []
    }
  },
  methods: {
    onInputChange(i) {
      this.searchValue.push(i)
    }
  }
}
</script>