<template>
  <div class="cls-sidebar">
    <el-menu
      default-active=""
      mode="horizontal"
      menu-trigger="click"
      :unique-opened="true"
      :ellipsis="false"
      class="tab-bar"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu v-for="crumb in crumbs" :key="crumb.id" :index="crumb.id">
        <template #title>
          <span>{{crumb.title}}</span>
        </template>
        <el-menu-item v-for="item in crumb.child" :key="item.id" :index="item.id">
          <template #title>{{item.title}}</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crumbs: [{
        title: '一级',
        id: '1',
        child: [{
          title: '二级1',
          id: '1-1',
        }, {
          title: '二级2',
          id: '1-2',
        }]
      }, {
        title: '一级1',
        id: '2',
        child: [{
          title: '二级21',
          id: '2-1',
        }, {
          title: '二级22',
          id: '2-2',
        }]
      }]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="less">
.cls-sidebar {
  margin-left: 12px;
  flex: 1;
  min-width: 300px;
  overflow-x: scroll;
  background-color: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  .tab-bar {
    width: auto;
    border-bottom: none;
  }
}
</style>
