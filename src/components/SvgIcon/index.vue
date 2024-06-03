<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
  },
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递过来的图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接受父组件传递过来的高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<template>
  <!-- 测试SVG图标使用 -->
  <!-- svg：图标外层容器节点，内部需要与use标签结合使用 -->
  <!-- 问题：如果设置了fill属性没有反应 则去icons里找到对应的图标属性把 fill 属性删除 -->

  <svg :style="{ height, width }">
    <!-- xlink:href执行用哪一个图标 -->
    <!-- fill：更改图标颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped></style>
