// 定义小仓库数据state类型

export interface UserState {
  token: string | null,
  userLogin: Function,
  userInfo: any,
  getUserInfo: Function,
  userLogout: Function,
}
