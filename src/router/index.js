import { createRouter, createWebHashHistory } from 'vue-router'
import {useGlobal} from '@/stores/global'
const routes = [{
  name: '首页',
  path: '/index',
  component: () => import('@/views/index.vue'),
  meta: { icon: 'icon-home'}
}, {
  name: 'h5',
  path: '/h5',
  meta: { icon: 'icon-html'},
  component: () => import('@/views/h5/index.vue')
}, {
  name: 'css',
  path: '/css',
  meta: { icon: 'icon-css'},
  component: () => import('@/views/css3/index.vue')
}, {
  name: 'js',
  path: '/javascript',
  meta: { icon: 'icon-js'},
  component: () => import('@/views/javascript/index.vue')
}, {
  name: 'vue相关',
  path: '',
  meta: { icon: 'icon-vue'},
  children: [{
    name: 'vue',
    path: '/vue',
    component: () => import('@/views/vue/index.vue')
  }]
}, {
  name: '组件开发',
  path: '',
  meta: { icon: 'icon-dianzan'},
  children: [{ 
    name: '点赞',
    path: '/digg',
    component: () => import('@/views/components/index.vue')
  }]
}, {
  name: '实践',
  path: '',
  meta: { icon: 'icon-practice'},
  children: [{ 
    name: 'git pages 搭建',
    path: '/gitPages',
    component: () => import('@/views/practice/index.vue')
  }]
}, {
  name: '面试题',
  path: '/interviewQuestion',
  meta: { icon: 'icon-practice'},
  component: () => import('@/views/interviewQuestion/index.vue')
}]

const router = createRouter({
  history: createWebHashHistory('/blog/'),
  routes,
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  const matchedRoutes = router.getRoutes(); // 获取所有已定义的路由
  const routeExists = matchedRoutes.some((route) => route.path === to.path);

  const global = useGlobal()
  global.setCurrentPath(to.path)
  if (to.path === '/' || !routeExists) {
    next('/index'); // 如果路由是根路径，跳转到首页
  } else {
    next(); // 否则继续导航
  }
});
export default router
