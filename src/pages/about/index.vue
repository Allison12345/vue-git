<template lang="pug">
  page.about.flex-c-tc
    .about__hd.flex-c-tc
      author-photo(:img='img')
      div {{version}}
      div {{url}}
    .about__bd
      button(@click='onClick') Logout
    .about__ft Support Gitter ❤️ ️
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      img: require('@/assets/imgs/allison.png'),
      version: 'Gitter v1.3.2',
      url: 'https://githup.com/huangjianke/Gitter'
    }
  },
  methods: {
    onClick() {
      this.$router.back()
    }
  }
}
</script>
<style lang="less">
.about {
  .about__hd {
    margin-top: 40px;
    div {
      margin: 5px;
    }
  }
  .about__bd {
    background-color: blue;
    border-radius: 40px;
    margin-top: 20px;
    button {
      color: white;
      padding: 5px 15px;
    }
  }
  .about__ft {
    margin-top: 100px;
    color: red;
  }
}
</style>