<template lang="pug">
  .word-toast
    i.word
    p.word-content {{word}}
</template>
<script>
import './style.less'
export default {
  name: 'word-toast',
  props: ['word']
}
</script>