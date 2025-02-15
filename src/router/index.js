import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages' // vite-plugin-pages 自动生成的路由

let route = routes.map(item => {
  if(item.path === '/blog/') {
    item.path = '/blog'
  }
  return item
})
console.log(route);
const router = createRouter({
  history: createWebHistory(),
  routes: route,
})
// 全局导航守卫
router.beforeEach((to, from, next) => {
  const matchedRoutes = router.getRoutes(); // 获取所有已定义的路由
  const routeExists = matchedRoutes.some((route) => route.path === to.path);
  if (!routeExists) {
    next('/blog'); // 如果路由不存在，跳转到首页
  } else {
    next(); // 否则继续导航
  }
});
export default router
