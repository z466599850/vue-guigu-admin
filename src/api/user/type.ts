// 登录接口需要携带参数 ts类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfoType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: Array<string>
  buttons: Array<string>
  routes: Array<string>
  token: string
}

interface userType {
  checkUser: userInfoType
}

// 定义服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number
  data: userType
}
