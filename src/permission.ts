import router from '@/router/index.ts'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import { useUserStore } from './store'
import { ElNotification } from 'element-plus'


// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `魔王系统 - ${to.meta.title}`
  const userStore = useUserStore()
  nprogress.configure({showSpinner: false})
  nprogress.start()
  // 有token
  if(userStore.token) {
    // 有 token 还去登录页？想干啥？不 让你去！
    if(to.path === '/login') {
      next({path: '/home'})
    }else {
      if(JSON.stringify(userStore.userInfo) === '{}') {
        try {
          await userStore.getUserInfo()
          next()
        }catch(error) {
          userStore.userLogout()
          ElNotification({
            type: 'error',
            title: '尊敬的用户：',
            message: '你好，很抱歉，您的Token已过期或服务器异常，请重新登录！',
            duration: 5000
          })
          next({path: '/login',query: {redirect: to.path}})
        }
      }else {
        next()
      } 
    }
  
  }else {
    // 没token还想去其他页面？
    if(to.path === '/login' || to.path === '/404') {
      next()
    }else {
      next({path: '/login',query: {redirect: to.path}})
    }
  }

})

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  
  nprogress.done()
})
