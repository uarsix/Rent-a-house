import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/my' },
  { path: '/home', name: 'home', component: () => import('@/views/Home') },
  { path: '/find', name: 'find', component: () => import('@/views/Find') },
  { path: '/info', name: 'info', component: () => import('@/views/Info') },
  { path: '/my', name: 'my', component: () => import('@/views/My') },
  { path: '/login', name: 'login', component: () => import('@/views/Login') },
  { path: '/map', name: 'map', component: () => import('@/views/Map') },
  { path: '/city', name: 'city', component: () => import('@/views/City') },
  { path: '/baidumap', name: 'baodumap', component: () => import('@/views/BaiDuMap') }
]

const router = new VueRouter({
  routes
})

export default router
