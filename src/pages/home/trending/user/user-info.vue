<template lang="pug">
  .user-info.bg.full
    cells.flex.flex-1.txt-center
      me-info-item(v-for='({label,key},index) in infoItems ' :key='key' :value='info[key]' :label='label' 
        :class='{"item-border-lt":index}')
      div follow share
    cells(v-for='(item,i) in userItems' :key='i')
      cell(v-for='({label,key,ft},j) in item' :key='j' :label='label' :ft='key?(info[key]||"--"):ft')
</template>
<script>
const ft = '<i class="eva eva-chevron-right-outline" />'
export default {
  name: 'user-info',
  data() {
    return {
      info: {
        repos: '23',
        follwers: '435',
        follwing: '21',
        email: 'abc@xyz.com',
        blog: 'https://alison.github.io',
        company: 'ieurjf',
        loaction: 'shenzheng'
      },
      infoItems: [
        { label: '仓库', key: 'repos' },
        { label: '粉丝', key: 'follwers' },
        { label: '关注', key: 'follwing' }
      ],
      userItems: [
        [
          {
            label: '开始repos',
            ft
          }
        ],

        [
          { label: '邮箱', key: 'email' },
          { label: '博客', key: 'blog' },
          { label: '公司', key: 'company' },
          { label: '所在地', key: 'location' }
        ]
      ]
    }
  }
}
</script>