import ax from 'axios'
import { localStore } from '../utils/store'

const ins = ax.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/proxy' : '/cms/api',
  timeout: 600000,
  method: 'post',
  data: {}
})
ins.interceptors.request.use(
  (config) => {
    let loginInfo: any = localStore.getItem('loginInfo', {})

    config.headers = {
      Authentication: loginInfo.authorization || ''
    }
    return config
  },
  (err) => Promise.reject(err)
)

ins.interceptors.response.use(
  (res) => {
    console.log(res, 'response')
    return res
  },
  (err) => Promise.reject(err)
)

export default ins
