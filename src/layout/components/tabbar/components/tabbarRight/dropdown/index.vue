<script setup lang="ts">
import { useUserStore } from '@/store'
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

const $router = useRouter()
const $route = useRoute()
const userStore = useUserStore()

const onLogout = async () => {
  // 退出登录
  try {
    await userStore.userLogout()
    console.log('看看我执行了吗')
    $router.push({ path: '/login', query: { redirect: $route.path } })
    ElNotification({
      type: 'success',
      title: 'Hi，你好',
      message: '退出成功！欢迎下次再来',
    })
  } catch(error) {
    ElNotification({
      type: 'error',
      title: '退出失败，请稍后再试'
    })
  }
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
      <span class="tabbar-right-name">
        {{ userStore.userInfo?.name || '用户' }}
      </span>
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
