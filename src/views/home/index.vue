<script setup lang="ts">
import { useUserStore } from '@/store'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.getUserInfo()
})
</script>
<script lang="ts">
export default {
  name: 'Home',
}
</script>

<template>
  <div>home首页</div>
</template>

<style lang="scss" scoped></style>
