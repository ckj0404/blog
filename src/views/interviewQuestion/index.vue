<template>
  <div class="catalog-md-body">
    <nav class="nav-bar" v-if="toc.length > 0">
      <ul>
        <li v-for="item in toc" :key="item.slug" :style="{ marginLeft: (item.level - 1) * 16 + 'px' }">
          <a href="javascript:;" @click.prevent="scrollToSlug(item.slug)">
            {{ item.content }}
          </a>
        </li>
      </ul>
    </nav>
    <el-scrollbar class="md-body-scrollbar">
      <Issue />
    </el-scrollbar>
  </div>
</template>

<script setup lang='js'>
import { ref, onMounted } from 'vue'
import { parseToc } from '@/utils/parseToc.js'
import Issue from './index.md'
import IssueRaw from './index.md?raw'

const toc = ref([])

onMounted(() => {
  toc.value = parseToc(IssueRaw)
})
function scrollToSlug(slug) {
  const el = document.getElementById(slug)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped lang='less'>
</style>
