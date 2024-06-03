import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 对外暴露,入口文件需要安装pinia
export default pinia

export * from './modules/user.ts'
export * from './modules/layoutSetting.ts'
