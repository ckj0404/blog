<template>
  <div class="body-layout">
    <Sidebar :sidebarWidth="sidebarWidth"></Sidebar>
    <div class="main-layout">
      <Header></Header>
      <Main :sidebarWidth="sidebarWidth"></Main>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
export default {
  components: {
    Header,
    Main,
    Sidebar
  },
  data() {
    return {
      sidebarWidth: 300
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateSidebarWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSidebarWidth);
  },
  methods: {
    updateSidebarWidth() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 760) {
        this.sidebarWidth = 100;
      } else{
        this.sidebarWidth = 300;
      }
    }
  }
}
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
