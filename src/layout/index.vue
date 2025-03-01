<template>
  <div class="body-layout">
    <Sidebar></Sidebar>
    <div class="main-layout">
      <Header></Header>
      <Main></Main>
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
    }
  },
  methods: {
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
