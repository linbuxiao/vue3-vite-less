import { createRouter, createWebHashHistory } from 'vue-router'

const historyRouter = createWebHashHistory()

const router = createRouter({
  history: historyRouter,
  routes: [
    {
      path: '/',
      component: ()=> import('/@/pages/home/index.vue')
    }
  ]
})

export default router

