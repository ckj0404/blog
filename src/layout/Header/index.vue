<template>
  <div class="cls-header">
    <el-icon :size="28" @click="toggleSideBar"><Operation /></el-icon>
    <img class="avatar" src="@/static/images/avatar.png"/>
  </div>
</template>

<script setup>
import SideBar from '../SideBar'

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

function toggleSideBar() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped lang="less">
.cls-header  {
  box-sizing: border-box;
  padding:  12px 16px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef5;
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 8px;
  }
}
</style>
