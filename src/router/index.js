import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Topics from '@/pages/Topics'
import Detail from '@/pages/Detail'
import Login from '@/pages/Login'
import Person from '@/pages/Person'
import Post from '@/pages/Post'
import User from '@/pages/User'

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Topics },
    { path: '/detail/:id', name: 'detail', component: Detail },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/person',
      name: 'person',
      component: Person,
      meta: { requiredAuth: true }
    },
    { path: '/post', name: 'post', component: Post },
    { path: '/user/:loginname', name: 'user', component: User },
  ]
})

router.beforeEach((to, from, next) => {
  const { requiredAuth } = to.meta
  const loginStatus = !!localStorage.getItem('loginStatus')

  if (requiredAuth && to.name !== 'login' && !loginStatus) {
    return next({ name: 'login' })
  }
  next()
})

export default router