<template>
  <div class="cls-sidebar">
    <div class="blog-logo">
      <img src="@/static/images/logo.png" alt="logo" />
    </div>
    <el-menu
      default-active="0"
      class="cls-menu"
      :unique-opened="true"
      :collapse="sidebarCollapse"
    > 
      <template v-for="(item, index) in menuList">
        <el-sub-menu v-if="item.children" :key="index" :index="index + ''">
          <template #title>
            <i :class="['iconfont', item.meta.icon]"></i> &nbsp;
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="(it, id) in item.children" :key="id" :index="index + '-' + id" @click="gotoPage(it.path)">
            <span>{{it.name}}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-if="!item.children" :key="index" :index="index + ''" @click="gotoPage(item.path)">
          <i :class="['iconfont', item.meta.icon]"></i> &nbsp;
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: this.$router.options.routes[0]?.children || [],
      isMobile: $Fw.isMobile(),
      sidebarCollapse: true
    }
  },
  methods: {
    updateSidebarWidth() {
      const viewportWidth = window.innerWidth;
      // console.log(viewportWidth);
      if (viewportWidth < 760) {
        this.sidebarCollapse = true;
      } else{
        this.sidebarCollapse = false;
      }
    },
    gotoPage(path) {
      this.$router.push(path)
    }
  },
  mounted() {
    console.log(this.isMobile)
    if(this.isMobile) {
      this.sidebarCollapse = true;
    } else {
      window.addEventListener('resize', this.updateSidebarWidth);
    }
  },
  beforeUnmount() {
    if(this.isMobile) {
      this.sidebarCollapse = false;
    } else {
      window.removeEventListener('resize', this.updateSidebarWidth);
    }
  },
}
</script>

<style scoped lang="less">
.cls-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ebeef5;
  max-width: 300px;
  // transition: width 0.3s ease-in-out; /* 缓动动画 */
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
