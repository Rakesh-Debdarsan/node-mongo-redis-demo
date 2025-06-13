// src/utils/redisClient.ts
import { createClient } from 'redis';

const redisClient = createClient();

redisClient.on('error', (err) => {
  console.error('❌ Redis error', err);
});

redisClient.on('connect', () => {
  console.log('✅ Connected to Redis');
});

redisClient.connect().catch(console.error);

export default redisClient;
