// Entry point for the backend application
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
dotenv.config();

const app = new Hono();

app.get('/', (c) => c.text('API is working'));

const PORT = Number(process.env.PORT) || 3000;
serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
