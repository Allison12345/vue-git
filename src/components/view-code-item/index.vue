<template lang="pug">
  .view-code-item.bg-white
    cell(:name='cptIcon' :label='label' :ft='cptFt')
</template>

<script>
export default {
  name: 'view-code-item',
  props: ['label', 'children'],
  computed: {
    cptIcon() {
      if (this.children) return 'folder-outline'
      return 'file-outline'
    },
    cptFt() {
      if (this.children) return '<i class="eva eva-chevron-right-outline" />'
      return ''
    }
  }
}
</script>

<style lang="less">
.view-code-item {
  margin: 10px;
}
</style>