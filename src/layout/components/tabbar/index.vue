<script setup lang="ts">
import TabbarLeft from './components/tabbarLeft/index.vue'
import TabbarRight from './components/tabbarRight/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <TabbarLeft></TabbarLeft>
    </div>
    <div class="tabbar-right">
      <TabbarRight></TabbarRight>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar-left {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  .tabbar-right {
    position: fixed;
    right: 0;
    top: 9px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
