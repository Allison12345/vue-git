export const CODE_FILES = 'CODE_FILES'

const state = {
  [CODE_FILES]: {}
}

const mutations = {
  [CODE_FILES](state, files) {
    state[CODE_FILES] = {
      ...state[CODE_FILES],
      ...files
    }
  }
}

const getters = {
  [CODE_FILES]: state => state[CODE_FILES]
}

export default {
  state,
  mutations,
  getters
}
