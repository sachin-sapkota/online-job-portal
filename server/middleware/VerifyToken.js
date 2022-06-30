const jwt = require('jsonwebtoken');
require('dotenv').config();
const { useRouter } = require('next/router');

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log(token);
  const router = useRouter();

  if (token === undefined) {
    router.push('/login');
    return res.json({
      message: 'Access Denied! Unauthorized User',
    });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
      if (err) {
        res.json({
          message: 'Invalid Token...',
        });
      } else {
        req.body = authData;
      }
    });
  }
  next();
};

module.exports = verifyToken;
