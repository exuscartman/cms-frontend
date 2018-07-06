import axios from 'axios'
import config from '../common/config'
import store from '../store'
import router from '../router'
import app from '../main'

axios.defaults.timeout = 10000
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 处理header一类的操作
    return config
  },
  err => {
    return Promise.reject(err)
  })

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.error(error)
    // 异常统一处理
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          app.errorTip('会话超时，请重新登录')
          store.commit('SET_USER', null)
          if (window.localStorage) {
            window.localStorage.setItem('user', null)
          }
          router.replace('/login')
          break
        case 500:
          app.errorTip(error.response.data.errMsg)
          router.replace('/error/500')
          break
        case 404:
          router.replace('/error/404')
          break
        case 403:
          app.errorTip(error.response.data.errMsg)
          router.replace('/error/403')
          break
        default:
          // 处理其他异常
          router.replace('/error/other')
          break
      }
      return Promise.reject(error.response)
    } else {
      router.replace('/error/other')
    }
  })

export default {
  ajaxGet (uri, params = null, cb) {
    var url = config.serverURI + uri
    axios.get(url, { params: params }).then(response => {
      if (response.data && cb && typeof cb === 'function') {
        cb(response.data)
      }
    }).catch(response => {
      console.error(response)
    })
  },

  ajaxPost (uri, params = null, cb) {
    var url = config.serverURI + uri
    axios.post(url, params).then(response => {
      if (response.data && cb && typeof cb === 'function') {
        cb(response.data)
      }
    }).catch(response => {
      console.error(response)
    })
  }
}
