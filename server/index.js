const express = require('express');
const next = require('next');
const cors = require('cors');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const session = require('express-session');

app.prepare().then(() => {
  const userrouter = require('./routes/user');
  const signuproute = require('./routes/signup');
  const server = express();
  server.use(bodyParser.json());

  server.use('/user', userrouter);
  server.post('/sign-up', signuproute);
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
