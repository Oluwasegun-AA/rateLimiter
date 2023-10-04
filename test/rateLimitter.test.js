import request from 'supertest';
import { app } from '../server/app';
import chai from 'chai'
import sinon from 'sinon';

const { createServer } = require('http');

describe('Validate rate limiter works', () => {
  let server;

  beforeEach(() => {
    server = createServer(app);
  });
  afterEach(() => {
    // Close the server and perform any cleanup
    server.close();
  });

  it('should perform a single API call /api/v1/auth/login and return remaining request limit in the headers', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .type('JSON').send({
        username: 'segun',
        password: 'password'
      })
      .expect('Content-type', /json/)
      .expect('X-RateLimit-Limit', '10')
      .expect('X-RateLimit-Remaining', '9')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      })
  });
});


describe('Validate rate limiter triggers error', () => {
  let req, server, sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    server = createServer(app);
    req = request(app);
  });

  afterEach(() => {
    // Close the server and perform any cleanup
    server.close();
    sandbox.restore();
  });

  it('should trigger error when rate limit is exceeded within the frame of 1 minute', async () => {
    // set a custom IP for  a fresh limit count
    sandbox.stub(app.request, 'ip').value('192.168.1.100');

    // Exhaust the rate limit by making 10 serial requests within the minute
    for (let currentLimit = 10; currentLimit > 0; currentLimit--) {
      await req
        .post('/api/v1/auth/login')
        .type('json')
        .send({
          username: 'segun',
          password: 'password'
        })
        .expect('Content-type', /json/)
        .expect('X-RateLimit-Limit', '10')
        .expect('X-RateLimit-Remaining', `${currentLimit - 1}`)
        .expect(200)
    }

    // Attempt a request afterEach the rate limit has been exceeded within the limit
    const response = await req
      .post('/api/v1/auth/login')
      .type('json')
      .send({
        username: 'segun',
        password: 'password'
      })
      .expect('Content-type', /json/)
      .expect('X-RateLimit-Limit', '10')
      .expect('X-RateLimit-Remaining', '0')
      .expect(429);

    chai.expect(response.body.error).to.equal('Too many requests, please try again later.');
  });
});
