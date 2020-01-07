<template lang="pug">
  form.search-bar.flex-r-lc(@submit.prevent='onSubmit')
    i.eva(class='eva-search-outline')
    input(type='text' v-model='inputValue' placeholder='Search What you want...') 
</template>
<script>
export default {
  name: 'search-bar',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.inputValue) {
        this.$emit('input', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
<style lang="less">
.search-bar {
  margin: 4px 10px;
  background-color: #ccc;
  padding: 7px 0;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
  .icon {
  }
  input {
    background: transparent;
    outline-style: none;
    border: 0;
  }
}
</style>