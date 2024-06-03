<script setup lang="ts">
import Dropdown from './dropdown/index.vue'
import { useLayoutSettingStore } from '@/store'

const layoutSettingStore = useLayoutSettingStore()

const onFullScreen = () => {
  // DOM 对象的属性：用来判断当前是不是全屏模式，全屏: true, 不是全屏：false
  // document.fullscreenElement && document.fullscreenElement.requestFullscreen()
  if (!document.fullscreenElement) {
    // 全屏
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}
</script>
<script lang="ts">
export default {
  name: 'TabbarRight',
}
</script>

<template>
  <el-button
    icon="Refresh"
    circle
    @click="layoutSettingStore.refresh = !layoutSettingStore.refresh"
  ></el-button>
  <el-button icon="FullScreen" circle @click="onFullScreen"></el-button>
  <el-button icon="Setting" circle></el-button>
  <img class="tabbar-right-img" src="../../../../../../public/1.png" alt="" />

  <Dropdown></Dropdown>
</template>

<style lang="scss" scoped>
.tabbar-right-img {
  margin: 0 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
