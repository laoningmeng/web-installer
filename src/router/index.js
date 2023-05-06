import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        {
          path: 'check',
          name: 'Check',
          component: () => import("../views/Check.vue")
        },
      ]
    },
  ]
})

export default router
