import { createRouter, createWebHistory } from 'vue-router'
import pcPage from '../pc/page.vue'
import point from '../pc/Point.vue'
import news from '../pc/News.vue'
import mobilePage from '../mobile/page.vue'

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
        path: '/point',
        name: 'point',
        component: point
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

/**
 * 判断是否是微信环境
 */
function isWeiXin () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') > -1) {
    return true // 是微信端
  } else {
    return false
  }
}

function isMobile () {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true // 手机端
  } else {
    return false
  }
}

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
