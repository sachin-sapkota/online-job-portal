const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const showroute = require('./routes/index.js');

  const userroute = require('./routes/user');

  server.use('/users', userroute);

  server.listen(3000);
});
