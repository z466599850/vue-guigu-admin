import { createApp } from 'vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 配置element-plus 国际化
//@ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
// 引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components/index.ts'
// 引入模板的全局样式
import '@/styles/index.scss'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入路由
import router from './router'
// 引入pinia
import pinia from './store'
// 路由守卫
import './permission.ts'
// 获取应用实例对象
const app = createApp(App)
// 安装element-plus 插件
app.use(ElementPlus)
// 国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装自定义插件
app.use(gloalComponent)
// 注册模板路由
app.use(router)

// 安装仓库
app.use(pinia)

app.mount('#app')
