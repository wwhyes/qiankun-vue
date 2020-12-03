import Vue from 'vue'
import VueRouter from 'vue-router'
import { BaseLayout } from '@/layouts'
import { appsRoutes } from '@/config/apps.config'
import Index from '@/views/Index'

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: Index,
        meta: { name: '首页' }
      },
      ...appsRoutes
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
