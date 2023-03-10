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
import MyRestaurant from '../views/MyRestaurant.vue'
import User from '../views/User.vue'
import OrderDelivery from '../views/OrderDelivery.vue'
import Restaurant from '../views/Restaurant.vue'
import InRestaurant from '../views/InRestaurant.vue'


const routes = [
  {
    //หน้าแรก
    path: '/',
    name: 'user',
    component: User
  },
  {
    // หน้าที่มายทำ
    path: '/MyRestaurant',
    name: 'MyRestaurant',
    component: MyRestaurant 
  },
  {
    //หน้าคำสั้งของไรเดอ
    path: '/Order',
    name: 'order',
    component : OrderDelivery
  },
  {
    // หน้าข้างในของร้านค้า
    path: '/Restaurant',
    name: 'Restaurant',
    component : Restaurant
  },
  {
    // หน้าข้างในของร้านค้า
    path: '/inRestaurant',
    name: 'test',
    component : InRestaurant
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
