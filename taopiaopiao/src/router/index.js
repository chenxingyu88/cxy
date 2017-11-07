import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/Movie'
import Moviemain from '@/views/Moviemain'
import Zoom from '@/views/Zoom'
import Login from '@/views/Login'
import Pages from '@/views/Pages'
import Page from '@/views/Page'
import Charts from '@/views/Charts/index'

Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/moviemain',
      name: 'Moviemain',
      component: Moviemain
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom,
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
      path: '/pages/:movie_id',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    }
  ]
})
newRouter.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (to.meta.isLogin && !userInfo) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})
export default newRouter
