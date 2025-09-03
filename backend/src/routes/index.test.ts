import { describe, it, expect } from 'vitest';
import { Hono } from 'hono';

import router from './index';

const app = new Hono().route('/', router);

describe('Routes', () => {
  it('GET / should return API is working', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('API is working');
  });
});
