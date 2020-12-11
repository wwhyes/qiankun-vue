import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouteView } from '~common/layouts'
import Home from '../views/Home.vue'

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
    component: RouteView,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { keepAlive: true }
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { keepAlive: true }
      }
    ]
  }
]

export default routes
