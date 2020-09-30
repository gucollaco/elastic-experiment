import Koa from 'koa'
import mount from 'koa-mount'
import bodyParser from 'koa-bodyparser'
import respond from 'koa-respond'
import router from './router'

export default new Koa()
  .use(bodyParser())
  .use(respond())
  .use(mount('/', router))
