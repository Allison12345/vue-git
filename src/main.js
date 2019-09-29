import 'eva-icons/style/eva-icons.css'
import '@/assets/styles/index.less'

import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import components from '@/components'
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
