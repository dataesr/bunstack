import Elysia from 'elysia';

import { HealthySchema, PingPongSchema } from '~/schemas/healthy';


export const healthyRoutes = new Elysia()
  .get('/ping', () => 'pong', {
    response: {
      200: PingPongSchema,
    }
  })
  .get(
    '/healthy',
    () => {
      return { healthy: true }
    },
    {
      reponse: {
        200: HealthySchema
      },
      summary: 'Check if the server is healthy',
    }
  )
