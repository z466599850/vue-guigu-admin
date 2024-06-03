import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutSettingStore = defineStore('layoutSetting', () => {
  const isCollapse = ref(false)
  const refresh = ref(false)
  return {
    isCollapse,
    refresh,
  }
})
