'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const fastifyEnv = require('@fastify/env')
const { options } = require('./config')

module.exports =  async function (fastify, opts) {
  // 参数配置
  fastify.register(fastifyEnv, options).ready((err) => {
    if (err) console.error(err)
    console.log(fastify.config) // or fastify[options.confKey]
  })
  //静态文件
  fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
  })
  // 映射路径
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
