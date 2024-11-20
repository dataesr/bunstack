import staticPlugin from '@elysiajs/static';
import { swagger } from '@elysiajs/swagger';
import Elysia from 'elysia';
import { api } from '~/main';

const ENV = Bun.env.NODE_ENV || 'development';

const createApp = async () => {
  switch (ENV) {
    case 'production':
      return new Elysia()
        .use(swagger({ path: '/swagger' }))
        .use(api)
        .use(staticPlugin({ prefix: '', alwaysStatic: true }))
        .get('*', () => Bun.file('./public/index.html'))
        .listen(3000);
    default:
      return new Elysia()
        .use(swagger({ path: '/swagger' }))
        .use(api)
        .listen(3000);
  }
};

createApp()
  .then((app) => {
    const startupTime = Math.floor(process.uptime() * 1000);
    const serverUrl = app.server?.url;

    console.info(`
  ELYSIA v${new Elysia().version} [🦊] ready in ${startupTime}ms
  Running in ${String(ENV).toUpperCase()} environement

  ➜ Local:          ${serverUrl}
  ➜ Documentation:  ${serverUrl}swagger
`);
  })
  .catch((error) => {
    console.error('Error while starting the server', error);
    process.exit(1);
  });

process.on('SIGINT', () => {
  console.log('Shutting down!');
  process.exit(0);
});
process.on('SIGTERM', () => {
  console.log('Shutting down!');
  process.exit(0);
});
