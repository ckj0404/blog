import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    Pages({
      dirs: "src/views", 
      extensions: ['vue', 'md'] // 让 pages 识别 Markdown
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', 'md'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
