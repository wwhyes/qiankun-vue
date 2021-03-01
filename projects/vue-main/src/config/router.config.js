import { BaseLayout } from '@/layouts'
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
        path: '',
        name: 'index',
        component: Index,
        meta: { name: '首页' }
      },
      {
        path: '/entry/:name',
        name: 'entry',
        // IF microApp's router mode is history
        children: [{ path: '*' }]
      }
    ]
  }
]
