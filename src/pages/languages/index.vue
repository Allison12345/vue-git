<template lang="pug">
page
  languages-cells__top(:clickItems='clickItems' @deleteItem='onDeleteItem')
  languages-cells(v-for='(i,key) in languagesItems ' :key='key' :item='i' :cellsIndex='key'
  @choose='onChooseItems')
  word-cells(:wordItems='wordItems' @onActiveWord='onActiveWord')
  word-toast(:word='activeWord' v-if='isShown')
</template>
<script>
export default {
  name: 'languages',
  data() {
    return {
      languagesItems: new Array(20)
        .fill(0)
        .map(() => ({ word: 'a', label: ['df', 'sf', 'sdf', 'sdf', 'sdf'] })),
      wordItems: [
        [
          'top',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z'
        ]
      ],
      activeWord: '',
      isShown: false,
      clickItems: [],
      cellsIndex: '',
      cellIndex: ''
    }
  },
  methods: {
    onActiveWord(j) {
      console.log(j)
      this.activeWord = j
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
