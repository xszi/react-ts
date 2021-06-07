import http from '@/utils/http'

// 通过账号密码登录
export function serviceLogin(data: object) {
  return http.post('/api/login', data)
}


