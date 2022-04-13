import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import BqbIndex from '../components/BqbIndex.vue'
import BqbDetail from '../components/BqbDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/bqb',
  },
  {
    path: '/bqb',
    name: 'Bqb',
    component: BqbIndex
  },
  {
    path: '/bqb-detail',
    name: 'BqbDetail',
    component: BqbDetail,
    meta: {
      showTabbar: false,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
  // Returning the savedPosition will result in a native-like behavior 
  // when navigating with back/forward buttons:
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router