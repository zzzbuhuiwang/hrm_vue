/*
 * @Author: jaden
 * @Description: 部门模块
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/hrm-org',
    component: Layout,
    redirect: 'noredirect',
    name: 'hrm-org',
    meta: {
      title: '组织架构管理',
      icon: 'architecture'
    },
    children: [
      {
        path: 'index',
        component: _import('hrm-org/pages/index'),
        name: 'hrm-org-index',
        meta: {title: '组织架构', icon: 'architecture', noCache: true}
      }
    ]
  }
]
