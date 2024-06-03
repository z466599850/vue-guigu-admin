<script setup lang="ts">
import { useUserStore } from '@/store';
import { useRouter,useRoute } from 'vue-router'


const $router = useRouter()
const $route = useRoute()
const userStore = useUserStore()

const onLogout = () => {
  // 退出登录
  userStore.userLogout()
  $router.push({path: '/login',query: {redirect: $route.path}})
}

</script>
<script lang="ts">
export default {
  name: 'Dropdown',
}
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <span class="tabbar-right-name">{{ userStore.userInfo?.username || '用户'}}</span>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="onLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.el-dropdown-link:hover {
  cursor: pointer;
  
}

</style>
