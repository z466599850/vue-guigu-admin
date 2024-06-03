import router from '@/router/index.ts'

// 全局前置守卫
router.beforeEach((to: any,from: any,next: any) => {
  console.log(11)
})


// 全局后置守卫
router.afterEach((to: any,from: any) => {

})