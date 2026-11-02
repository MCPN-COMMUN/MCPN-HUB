import { expect, test } from 'vitest';
import { createApp } from './app.js';

test('the health endpoint responds', async () => {
  const app = createApp();
  try {
    const response = await app.inject({ method: 'GET', url: '/api/health' });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  } finally {
    await app.close();
  }
});