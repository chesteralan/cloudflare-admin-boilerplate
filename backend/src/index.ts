// Entry point for the backend application
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('API is working'));

export default app;