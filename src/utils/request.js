import axios from 'axios'
import {MessageBox, Message, Notification} from 'element-ui'
import store from '@/store'
//创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 6000000
})
//设置axios请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    config.metadata = {startTime: new Date()}
    //API可视化
    console.log(`%c[${config.method}] ${config.url}`, `color: #4CAF50; font-weight: bold`, config.data ? config.data : '');
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//设置axios响应拦截器
service.interceptors.response.use(
  response => {
    response.config.metadata.endTime = new Date()
    response.duration = response.config.metadata.endTime - response.config.metadata.startTime
    let resDuration = response.duration / 1000
    const res = response.data
    console.log(`%c[${response.config.method}] ${response.config.url} ${resDuration}s`, `color: #03A9F4; font-weight: bold`, res);
    if (res.code !== 0) {
      Message({
        message: errMsg,
        type: 'warning',
        duration: 2 * 1000
      })
      return Promise.reject(new Error(errMsg))
    } else {
      return res
    }
  },
  error => {
    console.error(error);
    Message({
      message: error.message,
      type: 'warning',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
