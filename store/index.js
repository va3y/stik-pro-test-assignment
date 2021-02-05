import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navOpen: false,
      catalogOpen: false,
      isLoading: true,
      smMenuPage: 'root',
    },
    mutations: {
      closePreload(state) {
        state.isLoading = false
      },
      toggleNav(state) {
        state.navOpen = !state.navOpen
        state.smMenuPage = 'root'
      },
      openCatalog(state) {
        state.catalogOpen = true
      },
      closeCatalog(state) {
        state.catalogOpen = false
      },
      changeSmMenuPage(state, pageName) {
        state.smMenuPage = pageName
      },
    },
    actions: {},
    getters: {},
  })
}
export default createStore
