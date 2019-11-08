<template lang="pug">
  .languages-cells
    .languages-cells__hd {{item.word}}
    languages-cell(v-for='i,index in item.label' :key='index' :label='i')
</template>
<script>
export default {
  name: 'languages-cells',
  props: ['item']
}
</script>