<template>
  <div class="cls-main">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.cls-main {
  box-sizing: border-box;
  padding: 0;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
