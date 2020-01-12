<template lang="pug">
  .toast.txt-center.txt-white.flex-c-cc
    i.icon(v-if='icon')
    .content {{msg}}
</template>
<script>
import './style.less'
export default {
  name: 'toast',
  props: ['icon', 'msg']
}
</script>