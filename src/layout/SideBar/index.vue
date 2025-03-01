<template>
  <div class="cls-sidebar">
    <div class="blog-logo" @click="goToIndex">
      <img src="@/static/images/logo.png" alt="logo" />
    </div>
    <el-menu
      default-active="2"
      class="cls-menu"
      :collapse="sidebarWidth ===300 ? false : true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="iconfont icon-dianzan"></i> &nbsp;
          <span>Navigator Onefdssfasfdsf</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
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
  props: {
    sidebarWidth: {
      type: Number
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    goToIndex() {
      
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="less">
.cls-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ebeef5;
  .blog-logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .cls-menu {
    border-right: none;
    overflow-x: scroll;
    background-color: #fff;
    max-width: 300px;
    flex: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    .tab-bar {
      width: auto;
      border-bottom: none;
    }
  }
}
</style>
