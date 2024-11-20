import Elysia from 'elysia';

import { HealthySchema, PingPongSchema, VersionSchema } from '~/schemas/healthy';

export const healthyRoutes = new Elysia()
  .get('/ping', () => 'pong', {
    response: {
      200: PingPongSchema,
    },
  })
  .get(
    '/healthy',
    () => {
      return { healthy: true };
    },
    {
      reponse: {
        200: HealthySchema,
      },
      summary: 'Check if the server is healthy',
    },
  )
  .get(
    '/version',
    () => {
      return { version: Bun.env.VERSION ?? '0.0.0' };
    },
    {
      reponse: {
        200: VersionSchema,
      },
      summary: 'Returns the version of the application',
    },
  );
