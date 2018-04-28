import Mock from 'mockjs'

Mock.mock(/\/login\/login/, 'post', {
  roles: ['admin'],
  token: 'admin'
})
