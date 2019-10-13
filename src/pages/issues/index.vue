<template lang="pug">
  page.issues
    nav-bar(:items='navbarItems' :activeIndex='navActiveIndex' @active='onActive')
    scroller-y
      issues-item(v-for='(item,i) in cptItems' v-bind='item' :key='i')
</template>

<script>
export default {
  name: 'issues',
  data() {
    return {
      navActiveIndex: 0,
      navbarItems: [{ label: '开启' }, { label: '关闭' }],
      items: new Array(17).fill(0).map(() => ({
        title: 'dkshofksdf',
        commitNumbers: 767,
        openNumbers: 87,
        timeNumbers: 8,
        time: 'day',
        author: 'Allison',
        status: Math.random() > 0.5 ? 'open' : 'closed'
      }))
    }
  },
  methods: {
    onActive(index) {
      this.navActiveIndex = index
    }
  },
  computed: {
    cptItems() {
      return this.items.filter(({ status }) => {
        if (this.navActiveIndex) return status === 'closed'
        else return status === 'open'
      })
    }
  }
}
</script>

<style lang="less">
.issues {
  padding-top: 42px;
}
</style>