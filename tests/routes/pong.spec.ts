import request from 'supertest';
import app, { server } from '../../src/app';

describe('GET /api/ping', () => {
  afterAll(() => {
    server.close();
  });

  it('should respond with 200', async () => {
    const response = await request(app).get('/api/ping');

    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });
});