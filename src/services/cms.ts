import request from './request'

export const getVerifyCode = () => {
  request.post('/def/auth/getVerifyCode')
}
