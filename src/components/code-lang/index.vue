<template lang="pug">
  span.code-lang
    span.lang-color(:style='cptStyle')
    span {{code}}
</template>

<script>
export default {
  name: 'code-lang',
  props: ['color', 'code'],
  computed: {
    cptStyle() {
      return {
        borderColor: this.color,
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="less">
.code-lang {
  .lang-color {
    border-radius: 50%;
    border: 1px solid;
    height: 12px;
    width: 12px;
    padding: 4px;
    display: inline-block;
    background-origin: content-box;
    background-position: 2px 2px;
  }
}
</style>