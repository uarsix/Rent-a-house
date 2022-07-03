import Vue from 'vue'
import Vuex from 'vuex'
import VueXPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VueXPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    userToken: {},
    // 当前城市
    defaultCity: {
      label: '北京',
      pinyin: 'beijing',
      short: 'bj',
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.userToken = payload
    },
    outUser (state) {
      state.userToken = {}
    },
    // 点击更新城市
    checkCity (state, payload) {
      state.defaultCity = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
