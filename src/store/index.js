import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    values: []
  },
  mutations: {
    registered (state,val) {
      state.values.push(val);
    }
  },
  actions: {
  },
  modules: {
  }
})
