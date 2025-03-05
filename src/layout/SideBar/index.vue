<template>
  <div class="cls-sidebar" :style="{width: sidebarCollapse ? '64px' : '200px'}">
    <div class="blog-logo">
      <img src="@/static/images/logo.png" alt="logo" />
    </div>
    <el-menu
      :default-active="activeIndex"
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

<script setup>
import { useRouter } from 'vue-router'
import { mapState } from 'pinia'
import { useGlobal } from '@/stores/global'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

// 路由
const router = useRouter();
// store
const globalStore = useGlobal();

const props = defineProps({
  sidebarCollapse: {
    type: Boolean,
    default: false
  }
})

const menuList = ref(router.options.routes || [])

const activeIndex = ref('0')
const mapRouter = ref(new Map())
watch(() => globalStore.currentPath, (newVal) => {
  if(mapRouter.value.size === 0) {
    router.options.routes.forEach((item, index) => {
      if(!item.children) {
        mapRouter.value.set(item.path, index + '')
      } else {
        item.children.forEach((child, idx) => {
          mapRouter.value.set(item.path + child.path, index + '-' + idx)
        })
      }
    })
  }
  activeIndex.value = mapRouter.value.get(newVal)
})

function gotoPage(path) {
  router.push(path)
}
</script>

<style scoped lang="less">
.cls-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ebeef5;
  transition: width 0.3s linear; /* 缓动动画 */
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
