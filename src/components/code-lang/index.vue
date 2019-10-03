<template lang="pug">
  span.code-lang
    icon(name='radio-button-on-outline' :style='cptStyle')
    span {{code}}
</template>

<script>
export default {
  name: 'code-lang',
  props: ['color', 'code'],
  computed: {
    cptStyle() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>