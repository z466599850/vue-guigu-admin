<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import { useLayoutSettingStore } from '@/store'

const settingStore = useLayoutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'TabbarList',
}
</script>

<template>
  <!-- 顶部左侧图标 -->

  <component
    class="tabbar-left-icon"
    @click="settingStore.isCollapse = !settingStore.isCollapse"
    :is="settingStore.isCollapse ? 'Expand' : 'Fold'"
  ></component>
  <!-- 面包屑 -->
  <Breadcrumb></Breadcrumb>
</template>

<style lang="scss" scoped>
.tabbar-left-icon {
  margin-right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
</style>
