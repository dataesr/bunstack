import { t } from 'elysia';

export const HealthySchema = t.Object({
  healthy: t.Boolean()
});
export const PingPongSchema = t.String();
