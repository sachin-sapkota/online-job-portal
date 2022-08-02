const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (typeof token === 'undefined') {
    res.status(401).json({ success: false, msg: 'user not logged in ' });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
      if (err) {
        res.status(401).json({
          message: 'User session finished please login again',
        });
      } else {
        req.user = authData;
      }
    });
  }
  next();
};

module.exports = authenticate;
