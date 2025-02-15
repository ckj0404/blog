import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages' // vite-plugin-pages 自动生成的路由

console.log(routes);
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
