<template lang="pug">
page
  scroller-y
    repo-item(v-for='(item,index) in items' v-bind='item' :key='index' @click.native.prevent='onClick(item)')
    .ft
      .picker-button(@click='isShown = !isShown') {{cptSelectedItems}}
  picker(v-if='isShown' @cancel='isShown = false' :selectedIndex='mulSelIndex' @comfrim='onPickerConfirm'
  :pickItems='pickItems' @change='onPickerChange')
  successToast
</template>

<script>
export default {
  name: 'repo',
  data() {
    return {
      items: new Array(10).fill(0).map(() => ({
        author: 'tom',
        name: 'vue-git',
        desc: 'kjsdhkfjsbdcmsbmdjfjs',
        langColor: 'blue',
        lang: 'javascript',
        stars: '100',
        forks: '3434',
        todayStars: '48'
      })),
      isShown: false,
      mulSelIndex: [1, 1],
      pickItems: [['Today', 'Week', 'Month'], ['All', 'HTML', 'Javascript']]
    }
  },
  methods: {
    onClick(item) {
      const author = item.author,
        name = item.name,
        desc = item.desc
      console.log(author, name, desc)
      this.$router.push({ path: '/repo-info', query: { author, name, desc } })
    },
    onPickerConfirm(indexList) {
      this.mulSelIndex = indexList
      this.isShown = false
    },
    onPickerChange(groupIndex, itemIndex) {
      console.log(groupIndex, itemIndex)
    }
  },
  computed: {
    cptSelectedItems() {
      return this.pickItems
        .map((item, index) => item[this.mulSelIndex[index]])
        .join(' & ')
    }
  }
}
</script>
<style lang="less">
.ft {
  position: fixed;
  background-color: rgb(53, 53, 199);
  border-radius: 40px;
  margin-top: 20px;
  bottom: 80px;
  left: 80px;
  right: 80px;
  opacity: 80%;
  text-align: center;
  .picker-button {
    color: white;
    padding: 5px 15px;
  }
}
</style>