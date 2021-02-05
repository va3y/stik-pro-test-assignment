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
        state.catalogOpen = false
      },
      openCatalog(state) {
        state.catalogOpen = true
        state.navOpen = false
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
