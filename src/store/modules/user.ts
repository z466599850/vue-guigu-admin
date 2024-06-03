import { defineStore } from 'pinia'
import { httpUserLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type.ts'
import { ref } from 'vue'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token.ts'

export const useUserStore = defineStore('user', (): UserState => {
  const token = ref(GET_TOKEN()) as any

  // 用户登录的方法
  const userLogin = async (data: loginForm) => {
    console.log('用户登录')
    const res: loginResponseData = await httpUserLogin(data)

    if (res.code === 200) {
      token.value = res.data.token as string
      SET_TOKEN(res.data.token as string)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.data.message))
    }
  }
  return {
    token,
    userLogin,
  }
})
