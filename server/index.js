const express = require('express');
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes';
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

app.prepare().then(() => {
  const signuproute = require('./routes/signup');
  const server = express();
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(express.json());
  server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  server.use(router);

  server.post('/api', (req, res) => {
    return app.render(req, res, '/api', req.query);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log(` Ready on http://localhost:${port}`);
  });
});
