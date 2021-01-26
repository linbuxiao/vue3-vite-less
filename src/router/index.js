import { createRouter, createWebHashHistory } from 'vue-router'

const historyRouter = createWebHashHistory()

const router = createRouter({
  history: historyRouter,
  routes: [
    {
      path: '/',
      component: ()=> import('/@/pages/home/index.vue')
    },
    {
      path: '/test',
      component: ()=> import('/@/pages/test/index.vue')
    }
  ]
})

export default router

