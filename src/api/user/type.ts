// 登录接口需要携带参数 ts类型
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number,
  data: string,
  message: string,
  ok: boolean

}


interface userInfoType {
  avatar: string,
  buttons: Array<string>,
  name: string,
  roles: Array<string>,
  routes: Array<string>
}


// 定义服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number,
  data: userInfoType,
  message: string,
  ok: boolean
}


// 定义服务器返回退出登录相关的类型
export interface userLogoutResponseData {
  code: number,
  message: string,
  data: null,
  ok: boolean
}