import { BaseLayout } from '@/layouts'
import { appsRoutes } from '@/config/apps.config'
import Index from '@/views/Index'

/**
 * 基础路由
 * @type { *[] }
 */

export const constantRouterMap = [
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
