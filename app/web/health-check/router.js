import Router from 'koa-router'

export default new Router().get('/', (ctx) => ctx.ok('API is up!'))
