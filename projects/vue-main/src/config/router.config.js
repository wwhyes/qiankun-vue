import { BaseLayout } from '@/layouts'
import Index from '@/views/Index'
import Entry404 from '@/views/404'

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
        component: Index
      },
      {
        path: '/404',
        name: 'Entry404',
        component: Entry404
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
