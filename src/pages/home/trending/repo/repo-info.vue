<template lang="pug">
  .repo-info.bg.full
    .txt-center.font-w  {{$route.query.name}}
    .txt-center {{$route.query.desc}}
    cells
      .full-w.flex(v-for='(row,i) of iconItems' :key='i')
        info-item.flex-1(v-for='({icon,key,name},j) in row' :key='j' 
          :icon='icon' :label='key?info[key]:name')
    cells(v-for='(rows,i) in items' :key='i' )
      cell(v-for='({label,key,ft,path},j) in rows' :key='j' :label='label'
       :ft='key?`${info[key]}${ft}`:ft' :path='path' @click.native='onClick(path)')
    cells README.md
      br
      br
</template>

<script>
const ft = '<i class="eva eva-chevron-right-outline" />'
export default {
  name: 'repo-info',
  data() {
    return {
      info: {
        author: 'Allison',
        branch: 'branch',
        license: 'GPL-3.0',
        visit: '2334',
        star: '9384',
        fork: '54'
      },
      iconItems: [
        [
          { icon: 'eye-outline', key: 'visit' },
          { icon: 'star-outline', key: 'star' },
          { icon: 'shuffle-2-outline', key: 'fork' }
        ],
        [
          { icon: 'undo-outline', name: 'share' },
          { icon: 'save-outline', name: 'save' },
          { icon: 'copy-outline', name: 'copy' }
        ]
      ],
      items: [
        [
          {
            label: '作者',
            key: 'author',
            ft
            //path: '/user-info'
          },
          {
            label: '视图代码',
            ft,
            path: '/view-code'
          },
          {
            label: '分支',
            key: 'branch'
          },
          {
            label: '执照',
            key: 'license'
          }
        ],
        [
          {
            label: '问题',
            ft,
            path: '/issues'
          },
          {
            label: '事件',
            ft,
            path: '/events'
          },
          {
            label: '贡献者',
            ft,
            path: '/contributors'
          }
        ]
      ]
    }
  },
  methods: {
    onClick(path) {
      this.$router.replace(path)
    }
  }
}
</script>
