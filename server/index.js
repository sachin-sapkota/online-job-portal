const express = require('express');
const next = require('next');
const cors = require('cors');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const router = require('./routes/index.js');
const db1 = require('./config/auth_db');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  server.use(cookieParser());
  server.use(express.json());
  server.use('/api', router);
  // server.use('/user',user);
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log(` Ready on http://localhost:${port}`);
  });
});
