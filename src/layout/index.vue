<template>
  <div class="body-layout">
    <Header></Header>
    <div class="cls-sidebar-main">
      <SideBar></SideBar>
      <Main></Main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import Footer from './Footer'
</script>

<style scoped lang="less">
.body-layout {
  height: 100%;
  .cls-sidebar-main {
    display: flex;
    height: calc(100% - 160px);
  }
}
</style>
