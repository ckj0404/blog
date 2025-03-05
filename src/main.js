import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 美化markdown
import 'github-markdown-css/github-markdown.css';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'
hljs.registerLanguage('javascript', javascript)

// 引入iconfont
import '@/assets/iconfont/iconfont.css'
// 引入公共样式
import './style.css'

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
