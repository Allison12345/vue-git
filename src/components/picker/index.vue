<template lang="pug">
div
  mask-page.animate-fade-in
  .picker.bg-white.flex-c-tc.animate-slide-up
    .picker__hd
      a.picker-action__hd(@click='cancel')  取消
      a.picker-action__bd(@click='comfrim') 确定
    .picker__bd
      .picker__group(v-for='(i,index) in pickItems' :key='index' class="wrapper" ref='wrapper')
        .picker__content
          .picker__item(v-for='(a,key) of i' :key='key') {{a}}
        .picker__mask
        .picker__indicator
</template>

<script>
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)
export default {
  name: 'picker',
  props: ['pickItems'],
  mounted() {
    this.initScroll()
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    comfrim() {
      this.$emit('comfrim')
    },

    initScroll() {
      this.wheels = this.$refs.wrapper.map((group, index) =>
        this.createWheel((group, index))
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
        this.$emit('change', index, wheel.getSelectedIndex())
      })
      return wheel
    }
  }
}
</script>
<style lang="less">
.animate-fade-in {
  animation: fadeIn ease 0.3s forwards;
  .animate-slide-up {
    animation: slideUp ease 0.3s forwards;
  }
}
.picker {
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 75%;
  line-height: 1.4;
  background-color: #ffffff;
  overflow: hidden;
  padding: 0 calc(24px + constant(safe-area-inset-right))
    constant(safe-area-inset-bottom) calc(24px + constant(safe-area-inset-left));
  padding: 0 calc(24px + env(safe-area-inset-right)) env(safe-area-inset-bottom)
    calc(24px + env(safe-area-inset-left));
  .picker-action__hd {
    margin: 4px 15px 40px;
  }
}
</style>