<template lang="pug">
  .me
    author-photo(:img='info.img')
    .txt-center {{info.name}}
    .txt-center {{info.additionalName}}
    cells
      .txt-center {{info.desc}}
      .flex.txt-center
        me-info-item(v-for='({label,key},index) in infoItems' :key='key' 
          :class='{"item-border-lt":index}' :value='info[key]' :label='label')
    cells(v-for='(rows,i) in items' :key='i')
      cell(v-for='({label,key,ft},j) in rows' :key='j' :label='label' :ft='key?(info[key]||"--"):ft')
</template>

<script>
const ft = '<i class="eva eva-chevron-right-outline" />'
export default {
  name: 'me',
  data() {
    return {
      info: {
        desc: '前端小白',
        repos: '23',
        follwers: '435',
        follwing: '21',
        email: 'abc@xyz.com',
        blog: 'https://alison.github.io',
        img: require('@/assets/imgs/allison.png'),
        name: 'allison',
        additionalName: 'allison12345'
      },
      infoItems: [
        { label: '仓库', key: 'repos' },
        { label: '粉丝', key: 'follwers' },
        { label: '关注', key: 'follwing' }
      ],
      items: [
        [{ label: '关注 vue-git ♥️' }],
        [
          {
            label: '已关注',
            ft
          },
          { label: '问题', ft, path: '/issues' }
        ],
        [
          { label: '邮箱', key: 'email' },
          { label: '博客', key: 'blog' },
          { label: '公司', key: 'company' },
          { label: '所在地', key: 'location' }
        ],
        [{ label: '反馈', ft }, { label: '关于', ft }]
      ]
    }
  }
}
</script>

<style lang="less">
.me {
  .author-photo {
    margin: 0 auto;
  }
}
</style>