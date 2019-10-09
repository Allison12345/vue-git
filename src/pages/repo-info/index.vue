<template lang="pug">
  .info-item
    cells(v-for='(rows,i) in items' :key='i' )
      cell(v-for='({label,key,ft},j) in rows' :key='j' :label='label' :ft='key?info[key]:ft' )
</template>

<script>
const ft = '<i class="eva eva-chevron-right-outline" />'
export default {
  name: 'repo-info',
  data() {
    return {
      info: {
        author: 'Allison',
        brach: 'master',
        license: 'GPL-3.0'
      },
      items: [
        [
          {
            label: '作者',
            key: 'author',
            ft
          },
          {
            label: '视图代码',
            ft
          },
          {
            label: '',
            key: 'brach'
          },
          {
            label: '执照',
            key: 'licence'
          }
        ],
        [
          {
            label: '问题',
            ft
          },
          {
            label: '事件',
            ft
          },
          {
            label: '贡献者',
            ft
          }
        ]
      ]
    }
  }
}
</script>