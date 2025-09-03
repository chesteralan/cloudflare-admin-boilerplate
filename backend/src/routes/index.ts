import { Hono } from 'hono';

const router = new Hono();

router.get('/', (c) => c.text('API is working'));

export default router;
