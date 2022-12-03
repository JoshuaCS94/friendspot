import { rest, RestHandler } from 'msw'

import { ALL_FRIENDS, FRIEND_DETAILS } from './data/friends'

export const handlers: RestHandler[] = [
  rest.get('/friends', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ALL_FRIENDS))
  ),
  rest.get('/friends/id', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(FRIEND_DETAILS))
  ),
]
