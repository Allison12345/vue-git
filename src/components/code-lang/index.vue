<template lang="pug">
  span.code-lang
    icon(name='radio-button-on' :style='cptStyle')
    span {{code}}
</template>

<script>
export default {
  name: 'code-lang',
  props: ['color', 'code'],
  computed: {
    cptStyle() {
      return {
        color: this.color
      }
    }
  }
}
</script>