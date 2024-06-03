// 对外暴露常量配置路由

export const constantRoute = [
  {
    // 登录
    path: '/login',
    name: 'login', // 命名路由
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
      title: '登录',
    },
  },
  {
    // 登录成功展示数据
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      hidden: true, // 是否隐藏？
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          icon: 'HomeFilled',
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      icon: 'DataAnalysis',
      title: '数据大屏',
    },
  },
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    meta: {
      icon: 'Lock',
      title: '权限管理',
      hidden: true,
    },
    children: [
      {
        path: '/acl/user',
        name: 'User',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          icon: 'User',
          title: '用户管理',
        },
      },
      {
        path: '/acl/role',
        name: 'Role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          icon: 'UserFilled',
          title: '角色管理',
        },
      },
      {
        path: '/acl/permission',
        name: 'permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          icon: 'Monitor',
          title: '菜单管理',
        },
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/layout/index.vue'),
    redirect: '/product/trademark',
    meta: {
      icon: 'ShoppingBag',
      title: '商品管理',
      hidden: true,
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          icon: 'Coin',
          title: '品牌管理',
        },
      },
      {
        path: '/product/attribute',
        component: () => import('@/views/product/attribute/index.vue'),
        name: 'attribute',
        meta: {
          icon: 'Avatar',
          title: '属性管理',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          icon: 'Share',
          title: 'SPU管理',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          icon: 'HelpFilled',
          title: 'SKU管理',
        },
      },
    ],
  },
  {
    //
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      hidden: true,
      title: '404',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      hidden: true,
      title: 'Any',
    },
  },
]
