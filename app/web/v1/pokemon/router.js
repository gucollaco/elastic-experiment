import Router from 'koa-router'

import {
  find,
  insert,
  insertBulk,
} from './controller'

export default new Router()
  .get('/', find)
  .post('/', insert)
  .post('/bulk', insertBulk)
