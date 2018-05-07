'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  // BASE_API: '"https://www.easy-mock.com/mock/5ae3e6055901aa618d7d9927/test"'
})
