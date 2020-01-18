import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import code from './modules/code'

const modules = {
  code
}

export default new Vuex.Store({
  modules
})
