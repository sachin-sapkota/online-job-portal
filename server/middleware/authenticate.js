const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log(token);
  if (typeof token === 'undefined') {
    res.status(401);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
      if (err) {
        res.status(401).json({
          message: 'User session finished please login again',
        });
      } else {
        console.log(authData, 'authdata');
        req.user = authData;
      }
    });
  }
  next();
};

module.exports = authenticate;