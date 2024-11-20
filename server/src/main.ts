import Elysia from 'elysia';
import { healthyRoutes } from '~/routes/healthy';

export const api = new Elysia({ prefix: '/api' }).use(healthyRoutes);
