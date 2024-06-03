import http from '@/utils/http.ts'
import type { loginForm, loginResponseData, userResponseData } from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 暴露请求函数
// 登录
export const httpUserLogin = (data: loginForm) =>
  http.post<any, loginResponseData>(API.LOGIN_URL, data)

// 获取用户信息
export const httpUserGetInfo = () =>
  http.get<any, userResponseData>(API.USERINFO_URL)
