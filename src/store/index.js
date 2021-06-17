import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    values: [],
    userType:'' // défini le type d'utilisateur (phase de developpement)
  },
  mutations: {
    registered (state,val) {
      state.values.push(val);
    },
    type_inscription (state,val) {
      state.userType = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
