import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    standard: false,
    gold: false,
    loggedIn: false
  },
  mutations: {
    addStandardPack(state) {
      state.standard = true;
    },
    addGoldPack(state) {
      state.gold = true
    },
    removeStandardPack(state) {
      state.standard = false;
    },
    removeGoldPack(state) {
      state.gold = false;
    },
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
