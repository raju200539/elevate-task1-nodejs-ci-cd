const request = require('supertest');
const app = require('../src/server');

describe('GET /status', () => {
  it('should return status OK', async () => {
    const response = await request(app).get('/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });
});
