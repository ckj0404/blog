import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-md'
import hljs from 'highlight.js';
import path from 'path'
import highLightVue from './src/utils/highLightVue';
hljs.registerLanguage('vue-with-miniprogram', highLightVue);

export default defineConfig({
  base: '/blog/',
  publicPath: '/blog/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        highlight: (str, lang) => {
          if (lang === 'vue') {
            // 使用自定义语言高亮 Vue 代码块
            return hljs.highlight(str, { language: 'vue-with-miniprogram' }).value;
          }
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
          }
          return ''; // 使用默认的高亮处理
        },
      }
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ],
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', 'md'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
