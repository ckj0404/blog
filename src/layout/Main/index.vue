<template>
  <el-scrollbar class="cls-main">
    <router-view></router-view>
  </el-scrollbar>
</template>

<script setup>
</script>

<style scoped lang="less">
.cls-main {
  box-sizing: border-box;
  padding: 12px 16px;
  height: calc(100% - 80px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
