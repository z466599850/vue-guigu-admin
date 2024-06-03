// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局对象
const allGloalComponent: any = { SvgIcon, Pagination }
// 对外暴露插件对象
export default {
  // 必须叫install方法
  install(app: any) {
    // 注册项目全部的全局组件
    Object.keys(allGloalComponent).forEach((item) => {
      // 注册为全局组件
      app.component(item, allGloalComponent[item])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
