import { createStore } from 'vuex'

export default createStore({
  state: {
    listCard: [],
  },
  mutations: {
    addNew(state, payload) {
      state.listCard.push({
        indexS: payload.index,
        local: payload.local,
        name: payload.name,
        temp: payload.temp,
        wind: payload.wind,
      })
    },
    remItem(state, i) {
      state.listCard.splice(i, 1);
    },
  },
  actions: {},
  modules: {}
})
