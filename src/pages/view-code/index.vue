<template lang="pug">
  page.view-code
    scroller-y
      view-code-item(v-for='(item,i) in cptCurrentFiles' :key='i' v-bind='item' @click.native='onClick(item)')
</template>

<script>
import { mapGetters } from 'vuex'
import { CODE_FILES } from '@/store/modules/code'
export default {
  name: 'view-code',
  methods: {
    onClick(item) {
      const currentPath = this.$route.query.direction
      const childrenPath = `${currentPath}/${item.label}`
      if (item.children) {
        this.$store.commit(CODE_FILES, {
          [childrenPath]: new Array(15).fill(0).map((_, index) => ({
            label: String.fromCodePoint(parseInt(index + 65, 10)),
            children: Math.random() > 0.3
          }))
        })
        this.$router.push({
          path: '/view-code',
          query: {
            direction: childrenPath
          }
        })
      }
    }
  },
  computed: {
    ...mapGetters([CODE_FILES]),
    cptCurrentFiles() {
      console.log(this.$route.query)
      const currentPath = this.$route.query.direction
      return this[CODE_FILES][currentPath]
    }
  }
}
</script>

