import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { z } from 'zod';

export function createApp() {
  const app = Fastify({ logger: true });
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);
  app.get('/api/health', {
    schema: { response: { 200: z.object({ status: z.literal('ok') }) } },
  }, async () => ({ status: 'ok' as const }));
  return app;
}