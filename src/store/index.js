import Vue from 'vue'
import Vuex from 'vuex'
import VueXPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VueXPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    userToken: {}
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.userToken = payload
    },
    outUser (state) {
      state.userToken = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
