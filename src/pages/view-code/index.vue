<template lang="pug">
  page.view-code
    scroller-y
      view-code-item(v-for='({name,label,ft},i) in ViewCodeItems' :key='i'
        :name='name' :label='label' :ft='ft')
</template>

<script>
const ft = '<i class="eva eva-chevron-right-outline" />'
export default {
  name: 'view-code',
  data() {
    return {
      ViewCodeItems: new Array(15)
        .fill(0)
        .map(() => ({ name: 'file-outline', label: 'githup', ft: ft }))
    }
  }
}
</script>