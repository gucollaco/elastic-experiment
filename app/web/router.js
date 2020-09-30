import Koa from 'koa'
import mount from 'koa-mount'
import healthCheck from './health-check/router'

export default new Koa()
  .use(mount('/', healthCheck.routes()))
