const jwt = require('jsonwebtoken');
const db1 = require('../config/auth_db');

const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.send({ msg: 'No refresh token' });
  db1.execute(
    `SELECT * FROM users WHERE refresh_token=?`,
    [refreshToken],
    (err, result) => {
      console.log(result);
      if (!result[0]) return res.send({ msg: 'refresh token error' });
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          if (err) return res.sendStatus(403);

          const results = result[0];
          const id = results.id;
          const name = results.name;
          const email = result.email;
          const accessToken = jwt.sign(
            results,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15s' }
          );
        }
      );
      res.json({ accessToken });
    }
  );
};
module.exports = refreshToken;
