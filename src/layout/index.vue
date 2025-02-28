<template>
  <div class="body-layout">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
</script>

<style scoped lang="less">
.body-layout {
  height: 100%;
}
</style>
