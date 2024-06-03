<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useLayoutSettingStore } from '@/store'

const layoutSettingStore = useLayoutSettingStore()
const flag = ref(true)

watch(
  () => layoutSettingStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>

<template>
  <router-view #default="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
