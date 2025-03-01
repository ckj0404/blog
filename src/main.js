import { createApp } from 'vue'
import './style.css'// main.js
import 'github-markdown-css/github-markdown.css';

import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'

import App from './App.vue'
import router from './router'
// 引入iconfont
import '@/assets/iconfont/iconfont.css'


hljs.registerLanguage('javascript', javascript)
const app = createApp(App)

app.use(router)

app.mount('#app')
