import Mock from 'mockjs'

Mock.mock(/\/login/, 'post', {
  data: {
    token: '@guid'
  },
  msg: 'success',
  status: true
})

Mock.mock(/\/getUserInfoByToken/, 'post', {
  data: {
    // roles: ['test1', 'test2', 'test2-1', 'test2-2']
    purview: [{
      purviewLabel: 'test1',
      btnPurview: {
        hasAddBtn: true,
        hasEditBtn: true,
        hasDeleteBtn: false
      }
    }, {
      purviewLabel: 'test2'
    }, {
      purviewLabel: 'test2-1',
      btnPurview: {
        hasAddBtn: false,
        hasEditBtn: false,
        hasDeleteBtn: false
      }
    }]
  },
  msg: 'success',
  status: true
})

export default Mock
