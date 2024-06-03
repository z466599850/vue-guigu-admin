<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'Dropdown',
}
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <span class="tabbar-right-name">admin</span>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
