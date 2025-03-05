<template>
  <div class="body-layout">
    <Sidebar :sidebarCollapse="sidebarCollapse"></Sidebar>
    <div class="main-layout">
      <Header v-model="sidebarCollapse"></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

// 折叠菜单逻辑
const sidebarCollapse = ref(false)
const isMobile = ref($Fw.isMobile())
function updateSidebarCollapse() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 760) {
    sidebarCollapse.value = true;
  } else{
    sidebarCollapse.value = false;
  }
}
onMounted(() => {
  if(isMobile.value) {
    sidebarCollapse.value = true;
  } else {
    updateSidebarCollapse();
    window.addEventListener('resize', updateSidebarCollapse);
  }
})
onUnmounted(() => {
  if(isMobile.value) {
    sidebarCollapse.value = false;
  } else {
    window.removeEventListener('resize', updateSidebarCollapse);
  }
})


</script>

<style scoped lang="less">
.body-layout {
  height: 100%;
  width: 100%;
  display: flex;
  .main-layout {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0; /* 关键：允许内容缩小 */
    height: 100%;
  }
}
</style>
