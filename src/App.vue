<template lang='pug'>
  router-view
</template>

<script>
const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()
export default {
  name: 'app',
  created() {
    this.init()
  },
  methods: {
    init() {
      octokit.repos
        .listForUser({
          username: 'Allison12345',
          type: 'owner'
        })
        .then(({ data }) => {
          console.log(data)
        })
    }
  }
}
</script>
