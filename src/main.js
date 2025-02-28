import { createApp } from 'vue'
import './style.css'
import 'github-markdown-css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'
import App from './App.vue'
import router from './router'

hljs.registerLanguage('javascript', javascript)
const app = createApp(App)
// 高亮代码块
app.directive('highlight', {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  },
});

app.use(router)

app.mount('#app')
