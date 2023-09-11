import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 重写原型上的push方法，统一处理错误信息
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{ ShowNav: true }
  },
  {
    path: '/life',
    name: 'life',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: '/life/personal',
        name: 'personal',
        component: () => import('../components/Personal.vue')
      },
      {
        path: '/life/hometown',
        name: 'hometown',
        component: () => import('../components/Hometown.vue')
      },
      {
        path: '/life/hoby',
        name: 'hoby',
        component: () => import('../components/Hoby.vue')
      },
      {
        path: '/life/music',
        name: 'music',
        component: () => import('../components/Music.vue')
      },
      {
        path: '/life/sticker',
        name: 'sticker',
        component: () => import('../components/Sticker.vue')
      }
    ]
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import('../views/Learning.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
