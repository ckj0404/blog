<template>
  <div class="cls-header">
    <img class="avatar" src="@/static/images/avatar.png"/>
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from '../SideBar'
export default {
  data() {
    return {
    }
  },
  components: {
    SideBar
  },
  methods: {

  }
}

</script>

<style scoped lang="less">
.cls-header  {
  box-sizing: border-box;
  padding:  12px 16px;
  height: 80px;
  display: flex;
  align-items: center;
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 8px;
  }
}
</style>
