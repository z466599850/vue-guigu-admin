<script setup lang="ts">
import Logo from './components/logo/index.vue'
import Menu from './components/menu/index.vue'
import { constantRoute } from '@/router/routes.ts'
import Main from './components/main/index.vue'
import Tabbar from './components/tabbar/index.vue'
import { useRoute } from 'vue-router'
import { useLayoutSettingStore } from '@/store'

const $route = useRoute()
const settingStore = useLayoutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider" :class="{ fold: settingStore.isCollapse }">
      <Logo></Logo>
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          background-color="#001529"
          :collapse="settingStore.isCollapse"
          text-color="white"
          :default-active="$route.path"
          active-text-color="#4285f4"
          :collapse-transition="false"
        >
          <Menu :routerList="constantRoute"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar" :class="{ fold: settingStore.isCollapse }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div class="layout-main" :class="{ fold: settingStore.isCollapse }">
      <div>
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;
  color: white;
  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    transition: all 0.5s;
    background: $base-menu-background-color;

    .scrollbar {
      height: calc(100vh - $base-logo-height);

      .el-menu {
        border-right: 0;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout-tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.5s;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    color: #000;

    &.fold {
      width: calc(100vh - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout-main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    transition: all 0.5s;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: blue;
    padding: 20px;
    overflow: auto;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
