<template lang="pug">
page.scroll-y(ref='page')
  languages-cells__top(:clickItems='clickItems' @deleteItem='onDeleteItem')
  languages-cells(v-for='(item, key) in languagesItems ' :ref='item.word' :key='key' :item='item' :cellsIndex='key'
  @choose='onChooseItems')
  word-cells(:wordItems='wordItems' @onActiveWord='onActiveWord')
  toast(v-if='isShown' :msg='activeWord' style={width:'32px', height:'32px'})
</template>

<script>
const languagesItems = new Array(26).fill(0).map((_, index) => ({
  word: String.fromCodePoint(65 + index).toLowerCase(),
  label: ['df', 'sf', 'sdf', 'sdf', 'sdf']
}))

export default {
  name: 'languages',
  data() {
    return {
      languagesItems,
      wordItems: languagesItems.map(language => language.word),
      activeWord: '',
      isShown: false,
      clickItems: [],
      cellsIndex: '',
      cellIndex: ''
    }
  },
  methods: {
    onActiveWord(word) {
      this.activeWord = word
      this.isShown = true
      const languageDiv = this.$refs[word][0].$el
      const pageDiv = this.$refs.page.$el
      pageDiv.scrollTop = languageDiv.offsetTop
      setTimeout(() => {
        this.isShown = false
      }, 1500)
    },
    onChooseItems(cellsIndex, index) {
      console.log(cellsIndex, index)
      this.cellsIndex === cellsIndex
      this.cellIndex === index
      this.clickItems.push(this.languagesItems[cellsIndex].label[index])
    },
    onDeleteItem(index) {
      this.clickItems.splice(index, 1)
    }
  }
}
</script>
