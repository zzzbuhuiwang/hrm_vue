/*
 * @Author: jaden
 * @Description: 企业模块
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/hrm-company',
    component: Layout,
    redirect: 'noredirect',
    name: 'hrm-company',
    meta: {
      title: '企业模块管理',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: _import('hrm-company/pages/index'),
        name: 'hrm-company-index',
        meta: {title: '企业模块', icon: 'component', noCache: true}
      },
      {
        path: 'details/:id',
        component: _import('hrm-company/pages/detail'),
        name: 'hrm-company-detail',
        meta: {title: '企业详情', icon: 'component', noCache: true}
      }
    ]
  }
]
