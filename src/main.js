import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


// 引入iconfont
import '@/assets/iconfont/iconfont.css'
// 引入样式
import './styles/index.less'
// import 'github-markdown-css/github-markdown.css'
import 'prismjs/themes/prism.css'


//  Pinia 
import { createPinia } from 'pinia'; // 引入 Pinia
const pinia = createPinia();
app.use(pinia);

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// router
import router from './router'
app.use(router)


app.mount('#app')
