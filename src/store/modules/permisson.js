import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param purview
 * @param route
 */
function hasPermission (purview, route) {
  if (route.meta && route.meta.roles) {
    return purview.some(purview => route.meta.roles.indexOf(purview.purviewLabel) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param purview
 */
function filterAsyncRouter (asyncRouterMap, purview) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(purview, route)) {
      // 向有权限的路由中添加按钮权限
      for (let value of purview) {
        if (value.purviewLabel === route.meta.roles[0] && value.hasOwnProperty('btnPurview')) {
          for (let k in value.btnPurview) {
            route.meta[k] = value.btnPurview[k]
          }
        }
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, purview)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { purview } = data
        let accessedRouters
        // if (purview.indexOf('admin') >= 0) {
        //   accessedRouters = asyncRouterMap
        // } else {
        //   accessedRouters = filterAsyncRouter(asyncRouterMap, purview)
        // }
        accessedRouters = filterAsyncRouter(asyncRouterMap, purview)
        console.log(accessedRouters)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
