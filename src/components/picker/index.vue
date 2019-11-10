<template lang="pug">
mask-page
  .picker.bg-white
    .picker__hd.flex-r-sb
      a.picker-action__hd.txt-info(href='javascript:;' @click.prevent='cancel')  取消
      a.picker-action__bd.txt-green(href='javascript:;' @click.prevent='comfrim') 确定
    .picker__bd
      .picker__group.wrapper(v-for='(group, index) in pickItems' :key='index' ref='wrapper')
        .picker__content
          .picker__item(v-for='(item,key) of group' :key='key') {{item}}
        .picker__mask
        .picker__indicator
</template>

<script>
import './style.less'
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)
export default {
  name: 'picker',
  props: ['pickItems', 'selectedIndex'],
  data() {
    return {
      indexList: this.selectedIndex
    }
  },
  mounted() {
    this.initScroll()
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    comfrim() {
      this.$emit('comfrim', this.indexList)
    },
    initScroll() {
      this.wheels = this.$refs.wrapper.map((group, index) =>
        this.createWheel(group, index)
      )
    },
    createWheel(group, index) {
      const wheel = new BScroll(group, {
        wheel: {
          selectedIndex: this.selectedIndex[index],
          wheelWrapperClass: 'picker__content',
          wheelItemClass: 'picker__item'
        },
        probeType: 3
      })
      wheel.on('scrollEnd', () => {
        const newIndexList = [...this.indexList]
        newIndexList[index] = wheel.getSelectedIndex()
        this.indexList = newIndexList
        this.$emit('change', index, wheel.getSelectedIndex())
      })
      return wheel
    }
  }
}
</script>