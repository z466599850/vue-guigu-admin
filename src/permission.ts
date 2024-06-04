import router from '@/router/index.ts'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import { useUserStore } from './store'


// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  const userStore = useUserStore()
  nprogress.configure({showSpinner: false})
  nprogress.start()
  // 有token
  if(userStore.token) {
    // 有 token 还去登录页？想干啥？不让你去！
    if(to.path === '/login') {
      next({path: '/home'})
    }else {
      next()
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
