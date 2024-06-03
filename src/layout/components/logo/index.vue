<script setup lang="ts">
import title from '@/settings/title.ts'
import { useLayoutSettingStore } from '@/store'

const settingStore = useLayoutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<template>
  <div class="logo" v-if="!title.logoHidden">
    <img :src="title.logo" />
    <p v-if="!settingStore.isCollapse">{{ title.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  padding: 10px;
  display: flex;
  color: #fff;
  align-items: center;
  width: 100%;
  height: $base-logo-height;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  p {
    margin-left: 10px;
    font-size: $base-logo-title-text-fontSize;
  }
}
</style>
