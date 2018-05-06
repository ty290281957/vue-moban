import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/

// 静态路由表
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      component: _import('index/index'),
      name: 'index',
      meta: { title: '首页', icon: 'warning', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 动态路由表
export const asyncRouterMap = [
  {
    path: '/test1',
    component: Layout,
    redirect: '/test1/index',
    meta: { roles: ['test1'] }, // you can set roles in root nav
    children: [{
      path: 'index',
      component: _import('test1/index'),
      name: 'test1',
      meta: {
        title: 'test1',
        icon: 'warning',
        roles: ['test1-1'] // or you can only set roles in sub nav
      }
    }]
  }, {
    path: '/test2',
    component: Layout,
    redirect: '/test2/index',
    meta: { roles: ['test2'] }, // you can set roles in root nav
    children: [{
      path: 'index',
      component: _import('test2/index'),
      name: 'test2',
      meta: {
        title: 'test2',
        icon: 'warning',
        roles: ['test2-1'] // or you can only set roles in sub nav
      }
    }]
  }, {
    path: '/test3',
    component: Layout,
    redirect: '/test3/index',
    meta: { roles: ['test3'] }, // you can set roles in root nav
    children: [{
      path: 'index',
      component: _import('test3/index'),
      name: 'test3',
      meta: {
        title: 'test3',
        icon: 'warning',
        roles: ['test3-1'] // or you can only set roles in sub nav
      }
    }]
  }
]
