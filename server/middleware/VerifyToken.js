const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log(token);
  if (token === undefined) {
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
      if (err) {
        res.status(401).json({
          message: 'User session finished please login again',
        });
      } else {
        req.body = authData;
      }
    });
  }
  next();
};

module.exports = verifyToken;
