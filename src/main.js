import 'eva-icons/style/eva-icons.css'
import '@/assets/styles/index.less'

import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import components from '@/components'
Vue.use(components)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
