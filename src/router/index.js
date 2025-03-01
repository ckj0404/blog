import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  name: '',
  path: '/',
  component: () => import('@/layout/index.vue'),
  children: [{
    name: '首页',
    path: 'index',
    component: () => import('@/views/index.vue'),
    meta: { icon: 'icon-home'}
  }, {
    name: 'h5',
    path: 'h5',
    meta: { icon: 'icon-html'},
    component: () => import('@/views/h5/index.md')
    // children: [{
    //   name: 'h5',
    //   path: 'h5',
    // }]
  }, {
    name: 'css',
    path: 'css',
    meta: { icon: 'icon-css'},
    component: () => import('@/views/css3/index.md')
    // children: [{
    //   name: 'css',
    //   path: 'css',
    // }]
  }, {
    name: 'js',
    path: 'javascript',
    meta: { icon: 'icon-js'},
    component: () => import('@/views/javascript/index.md')
    // children: [{
    //   name: 'js',
    //   path: 'javascript',
    // }]
  }, {
    name: 'vue相关',
    path: '',
    meta: { icon: 'icon-vue'},
    children: [{
      name: 'vue',
      path: 'vue',
      component: () => import('@/views/vue/index.vue')
    }]
  }, {
    name: '组件开发',
    path: '',
    meta: { icon: 'icon-dianzan'},
    children: [{ 
      name: '点赞',
      path: 'digg',
      component: () => import('@/views/components/digg.md')
    }]
  }]
}]
const router = createRouter({
  history: createWebHashHistory('/blog/'),
  routes,
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  const matchedRoutes = router.getRoutes(); // 获取所有已定义的路由
  const routeExists = matchedRoutes.some((route) => route.path === to.path);
  if (to.path === '/') {
    next('/index'); // 如果路由是根路径，跳转到首页
  } else if (!routeExists) {
    next('/index'); // 如果路由不存在，跳转到首页
  } else {
    next(); // 否则继续导航
  }
});
export default router
