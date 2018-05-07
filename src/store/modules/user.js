import { loginByUsername, getUserInfoByToken } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    // user: '',
    // status: '',
    // code: '',
    // name: '',
    // avatar: '',
    // introduction: '',
    purview: [],
    // setting: {
    //   articlePlatform: []
    // },
    token: getToken()
  },

  mutations: {
    // SET_CODE: (state, code) => {
    //   state.code = code
    // },
    // SET_INTRODUCTION: (state, introduction) => {
    //   state.introduction = introduction
    // },
    // SET_SETTING: (state, setting) => {
    //   state.setting = setting
    // },
    // SET_STATUS: (state, status) => {
    //   state.status = status
    // },
    // SET_NAME: (state, name) => {
    //   state.name = name
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    // },
    SET_PURVIEW: (state, purview) => {
      state.purview = purview
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data.data
          commit('SET_TOKEN', data.token)
          // commit('SET_PURVIEW', data.roles)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfoByToken(state.token).then(response => {
          console.log(response)
          const data = response.data
          commit('SET_PURVIEW', data.data.purview)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        // commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    }

    // 前端 登出
    // FedLogOut ({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // },

    // 动态修改权限
    // ChangeRoles ({ commit }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
