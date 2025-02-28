<template>
  <div class="cls-main" v-highlight>
    <router-view></router-view>
  </div>
</template>

<script setup>


</script>

<style scoped lang="less">
.cls-main {
  box-sizing: border-box;
  padding: 12px 16px;
  height: calc(100% - 160px);
  overflow-y: scroll;
}
</style>
