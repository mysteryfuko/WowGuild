import { createRouter, createWebHistory } from 'vue-router'
import pcPage from '../pc/page.vue'
import point from '../pc/Point.vue'
import pointChange from '../pc/PointChange.vue'
import loot from '../pc/Loot.vue'
import news from '../pc/News.vue'
import mobilePage from '../mobile/page.vue'
import { isMobile, isWeiXin } from '../util/myfun'

const routes = [
  {
    path: '/',
    name: 'pcPage',
    component: pcPage,
    children: [
      {
        path: '/',
        name: 'news',
        component: news
      },
      {
        path: '/point/:id',
        name: 'point',
        component: point
      },
      {
        path: '/loot/:id',
        name: 'loot',
        component: loot
      },
      {
        path: '/pointChange/:id',
        name: 'pointChange',
        component: pointChange
      }
    ]
  },
  {
    path: '/m',
    name: 'mobilePage',
    component: mobilePage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/m')) {
    if (isWeiXin() || isMobile()) {
      next('/m' + to.path)
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
