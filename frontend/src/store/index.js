import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMessages } from '../api/messages'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    setMessages(state, payload) {
      const flatData = payload.data.data
      state.messages = flatData
    }
  },
  getters: {
    messages: state => state.messages
  },
  actions: {
    async setMessages({commit}) {
      const res = await fetchMessages()
      commit('setMessages', res)
    }
  }
})
