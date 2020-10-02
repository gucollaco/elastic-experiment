import Koa from 'koa'
import mount from 'koa-mount'
import healthCheck from './health-check/router'
import pokemon from './v1/pokemon/router'

export default new Koa()
  .use(mount('/', healthCheck.routes()))
  .use(mount('/v1/pokemon', pokemon.routes()))
