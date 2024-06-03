<script setup lang="ts">
import { useRoute } from 'vue-router'

const $route = useRoute()

console.log($route.matched)
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      v-show="item.meta.title"
      :key="index"
      :to="item.path"
    >
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
