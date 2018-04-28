import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
// import errorLog from './modules/errorLog'
// import tagsView from './modules/tagsView'
import permission from './modules/permisson'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    user,
    app
    // errorLog,
    // tagsView
  },
  getters
})

export default store
