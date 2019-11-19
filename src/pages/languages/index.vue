<template lang="pug">
page
  languages-cells(v-for='(i,index) in languagesItems ' :key='index' :item='i')
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
      isShown: false
    }
  },
  methods: {
    onActiveWord(j) {
      console.log(j)
      this.activeWord = j
      setTimeout(() => {
        this.isShown = false
      }, 1500)
    }
  }
}
</script>
