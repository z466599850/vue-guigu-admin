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
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', (): UserState => {
  const token = ref(GET_TOKEN()) as any
  const userInfo = reactive({})

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

  // 获取用户详情信息
  const getUserInfo = async () => {
    const res: userResponseData = await httpUserGetInfo()

    if (res.code === 200) {
      Object.assign(userInfo, res.data.checkUser)
    }
  }

  // 退出系统
  const userLogout = () => {
    Object.assign(userInfo, {
      username: '',
      avatar: '',
    })
    REMOVE_TOKEN()
  }

  return {
    token,
    userInfo,
    userLogin,
    getUserInfo,
    userLogout,
  }
})
