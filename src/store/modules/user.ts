import { defineStore } from 'pinia'
import { httpUserLogin, httpUserGetInfo } from '@/api/user'
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type.ts'
import { reactive, ref } from 'vue'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token.ts'
import { httpUserLogout } from '@/api/user'


export const useUserStore = defineStore('user', (): UserState => {
  const token = ref(GET_TOKEN()) as any
  const userInfo = reactive({})

  // 用户登录的方法
  const userLogin = async (data: loginForm) => {
    console.log('用户登录')
    const res: loginResponseData = await httpUserLogin(data)
    console.log(res,'用户登录')
    if (res.code === 200) {
      token.value = res.data as string
      SET_TOKEN(res.data as string)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.data))
    }
  }

  // 获取用户详情信息
  const getUserInfo = async () => {
    const res: userResponseData = await httpUserGetInfo()
    console.log(res,'详情')
    if (res.code === 200) {
      Object.assign(userInfo, res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.message))
    }
  }

  // 退出系统
  const userLogout = async () => {

    const res = await httpUserLogout()

    if(res.code === 200) {
      token.value = ''
      Object.assign(userInfo, {})
      REMOVE_TOKEN()
      return 'ok'
    }else {
      return Promise.reject(new Error(res.message))
    }

      
    }
  

  return {
    token,
    userInfo,
    userLogin,
    getUserInfo,
    userLogout,
  }
})
