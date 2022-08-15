import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {
      path: '/home'
    }
  },
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      path: '/home'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/view/login/index.vue')
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('@/view/layout/index.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/view/home/index.vue'),
        meta: {
          title: '发现'
        }
      },
      {
        name: 'mine',
        path: '/mine',
        component: () => import('@/view/mine/index.vue'),
        meta: {
          title: '我的'
        }
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default router
