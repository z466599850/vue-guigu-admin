// 进行 axios 二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 第一步：利用 axios对象的create方法，去创建axios实例（其他的配置：基础路径、超时的时间）
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径上携带 /api
  timeout: 5000, // 超时时间
})

// 第二步：http实例添加请求与响应拦截器
// 使用请求拦截器
http.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头，经常给服务器端携带公共参数

  // 返回配置对象
  return config
})

// 第三步：响应拦截器
http.interceptors.response.use(
  (response) => {
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败回调：处理http网络错误
    // 定义一个变量：存储网络错误信息
    let message = ''

    // http状态码
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络问题'
        break
    }

    ElMessage.error(message)

    return Promise.reject(error)
  },
)

export default http
