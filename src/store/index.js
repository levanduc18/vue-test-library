import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objectState: {
      test1: { hihi: "" },
      test2: "",
    },
  },
  getters: {
    objectState(state) {
      return state.objectState;
    },
  },
  mutations: {
    setObjectState(state, payload) {
      state.objectState = payload;
    },
  },
  actions: {
    getObjectState({ commit }, payload) {
      commit("setObjectState", payload);
    },
  },
  modules: {},
});
