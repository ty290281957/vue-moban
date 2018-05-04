import request from '@/utils/request'

export function loginByUsername (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfoByToken (data) {
  return request({
    url: '/getUserInfoByToken',
    method: 'post',
    data
  })
}
