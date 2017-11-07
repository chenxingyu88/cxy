import Vue from 'vue'
import Router from 'vue-router'
import Webapp from '@/views/webapp'
import Category from '@/views/category'
import Cart from '@/views/cart'
import User from '@/views/user'
import Login from '@/views/login'
import Page from '@/views/page'

Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/webapp'
    },
    {
      path: '/webapp',
      name: 'Webapp',
      component: Webapp
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})

newRouter.beforeEach((to, from, next) => {
  let userTel = JSON.parse(window.localStorage.getItem('userTel'))
  console.log(to.path)
  document.title = to.path + ''
  if (to.meta.isLogin && !userTel) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})
export default newRouter
