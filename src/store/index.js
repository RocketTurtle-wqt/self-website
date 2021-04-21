import Vue from 'vue'
import Vuex from 'vuex'
import {
  CHANGE_SHOWFLAG
} from '../config/mutation-type.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showflag: false,
    // documentWidth: document.body.clientWidth
  },
  mutations: {
    [CHANGE_SHOWFLAG](state) {
      state.showflag = !state.showflag;
    }
  },
  actions: {
  },
  modules: {
  }
})
