import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-md'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItPrism from 'markdown-it-prism'

export default defineConfig({
  base: '/blog/',
  publicPath: '/blog/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(markdownItPrism)
        md.use(markdownItAnchor, {
          slugify: s =>
            s
              .trim()
              .toLowerCase()
              .replace(/\s+/g, '-'),
        })
      },
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
