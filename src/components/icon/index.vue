<template lang="pug">
  i.eva(:class='`eva-${name}`')
</template>

<script>
export default {
  name: 'icon',
  props: ['name']
}
</script>