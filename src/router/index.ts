// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//       },
//     ],
//   },
// ]

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import OrderDelivery from '../views/OrderDelivery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: User
  },
  {
    path: '/Restaurants',
    name: 'user',
    component: Home 
  },
  {
    path: '/Order',
    name: 'order',
    component : OrderDelivery
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
