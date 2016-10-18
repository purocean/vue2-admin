import VueRouter from 'vue-router'

import Http404 from '../pages/Http404'
import Http403 from '../pages/Http403'
import Http500 from '../pages/Http500'

import Login from '../pages/Login'
import User from '../pages/User'
import Auth from '../auth/auth'

const routes = [
  {name: 'home', path: '/', redirect: '/user'},
  {name: 'login', path: '/login', component: Login},
  {name: 'user', path: '/user', component: User},

  {name: '403', path: '/403', component: Http403},
  {name: '404', path: '/404', component: Http404},
  {name: '500', path: '500', component: Http500}
]

const router = new VueRouter({
  routes
})

const allowList = ['/404', '/403', '/500', '/login', '/home']

router.beforeEach((to, from, next) => {
  if (allowList.indexOf(to.path) > -1) {
    next()
    return
  }

  if (Auth.isLogin()) {
    Auth.can(to.path, allow => {
      if (allow) {
        next()
      } else {
        next({name: '403'})
      }
    })
  } else {
    next({name: 'login'})
  }
})

export default router
