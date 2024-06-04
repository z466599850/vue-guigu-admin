import http from '@/utils/http.ts'
import type { loginForm, loginResponseData, userResponseData ,userLogoutResponseData} from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}

// 暴露请求函数
// 登录
export const httpUserLogin = (data: loginForm) => http.post<any, loginResponseData>(API.LOGIN_URL, data)

// 获取用户信息
export const httpUserGetInfo = () => http.get<any, userResponseData>(API.USERINFO_URL)

// 退出登录
export const httpUserLogout = () => http.post<any, userLogoutResponseData>(API.LOGOUT_URL)

