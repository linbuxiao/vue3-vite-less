import { createRouter, createWebHashHistory } from 'vue-router'

const historyRouter = createWebHashHistory()

const router = createRouter({
  history: historyRouter,
  routes: [
    {
      path: '/',
      component: ()=> import('/@/pages/home/index.vue')
    },{
      path: '/test', // vuex 测试页面
      component: ()=> import('/@/pages/test/index.vue')
    },{
      path: '/rem', // rem 测试页面
      component: ()=> import('/@/pages/rem/index.vue')
    }
  ]
})

export default router

