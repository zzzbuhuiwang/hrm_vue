import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [

  {
    root: true,
    path: '/emp',
    component: Layout,
    name: 'emp',
    meta: {
      title: 'emp',
      icon: 'people'
    },
    children: [
      // 列表
      {
        path: 'index',
        component: _import('hrm-emp/pages/index'),
        name: 'hrm-emp-index',
        meta: {
          title: '员工',
          icon: 'people',
          noCache: true
        }
      },
      // 详情
      {
        path: 'details/:id',
        component: _import('hrm-emp/pages/details'),
        // hidden: true // 是否显示在左侧菜单
        name: 'details',
        meta: {
          title: '详情'
        }
      }
    ]
  }
]
