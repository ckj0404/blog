import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    name: '首页',
    path: '/',
    component: () => import('@/views/index.vue')
  }, {
    name: 'h5',
    path: '/h5',
    component: () => import('@/views/h5/index.md')
  }, {
    name: 'css',
    path: '/css',
    component: () => import('@/views/css3/index.md')
  }, {
    name: 'javascript',
    path: '/javascript',
    component: () => import('@/views/javascript/index.md')
  }, {
    name: 'vue',
    path: '/vue',
    component: () => import('@/views/vue/index.vue')
  }, {
    path: '/components',
    redirect: '/components/digg',
    children: [{ 
      name: '点赞',
      path: 'digg',
      component: () => import('@/views/components/digg.md')
    }]
  }]
const router = createRouter({
  history: createWebHistory(),
  base: '/blog/',
  routes,
})

// 全局导航守卫
// router.beforeEach((to, from, next) => {
//   const matchedRoutes = router.getRoutes(); // 获取所有已定义的路由
//   const routeExists = matchedRoutes.some((route) => route.path === to.path);
//   if (!routeExists) {
//     next('/blog'); // 如果路由不存在，跳转到首页
//   } else {
//     next(); // 否则继续导航
//   }
// });
export default router
