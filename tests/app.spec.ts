import request from 'supertest';
import app, { server } from '../src/app';

describe('GET /api/healthcheck', () => {
  afterAll(() => {
    server.close();
  });

  it('should respond with 200', async () => {
    const response = await request(app).get('/api/healthcheck');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});