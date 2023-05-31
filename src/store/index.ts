import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    selectedBlogue: ''
  },
  mutations: {
    SET_SelectedBlogue: (state: any, href: Object) => (state.selectedBlogue = href)
  },
  actions: {
    GET_SelectedBlogue({ commit }, href: Object) {
      commit('SET_SelectedBlogue', href)
    }
  }
})

export default store
