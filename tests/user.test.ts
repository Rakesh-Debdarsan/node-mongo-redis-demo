import request from 'supertest';
import app from '../src/app';

describe('GET /api/users', () => {
  it('should return 401 if not authorized', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(401);
  });

  it('should return users if authorized', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', 'Bearer demo-token');
    expect(res.statusCode).toEqual(200);
  });
});
