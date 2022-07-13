const db = require('../config/sign_authdb');
const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
require('dotenv').config();
// const {
//   signupValidation,
//   loginValidation,
// } = require('../middleware/signValidator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getuserbyemail } = require('../config/sign_authdb');
const { strict } = require('assert');

exports.getUsers = async (req, res) => {
  const { user } = req;
  if (!user)
    return res.status(401).json({ msg: 'not logged in', success: false });
  return res.send(req.body);
};

exports.userprofile = async (req, res) => {
  const user = req.body;
  if (!user)
    return res.status(401).json({ msg: 'not logged in', success: false });

  // db1.execute(
  //   `SELECT * FROM users WHERE username=? `,
  //   [username],
  //   (err, result) => {
  //     if (result.length) {
  //       return res.status(409).send({
  //         msg: 'This username is already taken!',
  //         success: false,
  //       });
  //     } else {
  //       return res.send({ msg: 'username found', success: true });
  //     }
  //   }
  // );

  return res.send(req.body);
};

exports.getuserprofile = async (req, res) => {
  if (!req.body) return res.status(400).send({ success: false });

  return res.status(200);
};

// exports.getuserprofile = async (req, res) => {
//   db1.execute(`SELECT * FROM users WHERE id=? `, [id], (err, result) => {
//     if (result.length) {
//       return res.send(result);
//     } else {
//       return res.send({ msg: 'id not found' });
//     }
//   });
// };

exports.getuserprofilebyid = async (req, res) => {
  db1.execute(
    `SELECT * FROM users WHERE id=? `,
    [req.params],
    (err, result) => {
      if (result.length) {
        return res.send(result);
      } else {
        return res.send({ msg: 'id not found', success: false });
      }
    }
  );
};
exports.getuserbyusername = async (req, res) => {
  const username = req.body.username;
  db1.execute(
    `SELECT * FROM users WHERE username=? `,
    [username],
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This username is already taken!',
          success: false,
        });
      } else {
        return res.send({ msg: 'username found', success: true });
      }
    }
  );
};
exports.Register = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;
  const number = req.body.number;
  let password = req.body.password;
  db1.execute(
    `SELECT * FROM users WHERE email = ? OR username=? `,
    [email, username],
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'this user is already in use!',
        });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res
              .status(500)
              .send({ msg: 'password is incorrect', success: false });
          } else {
            const randomid = randomUUID();
            db1.execute(
              'INSERT INTO users (id, name, username, email,number, password) VALUES (?,?,?,? ,?, ?)',
              [randomid, name, username, email, number, hash],
              (error, result) => {
                if (error) return res.send({ msg: 'error while registering' });
                else {
                  res.send({ msg: 'registration sucessfull', success: true });
                }
              }
            );
          }
        });
      }
    }
  );
};

exports.Login = async (req, res) => {
  const email = req.body.email;

  db1.execute(`SELECT * FROM users WHERE email= ?`, [email], (err, result) => {
    if (err) {
      return res
        .sendStatus(400)
        .send({ msg: 'user not found', success: false });
    }
    if (!result.length) {
      return res.send({
        msg: 'Email or password is incorrect',
        success: false,
      });
    }

    bcrypt.compare(req.body.password, result[0]['password'], (err, results) => {
      if (err) {
        res.throw(err);
      }

      const data = {
        id: result[0].id,
        name: result[0].name,
        username: result[0].username,
        email: result[0].email,
        verified: result[0].verified,
        Last_login: result[0].Last_login,
        number: result[0].number,
        acctype: result[0].acctype,
      };
      if (results) {
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '10d',
        });

        db1.execute(`UPDATE users SET Last_login = now() WHERE id= ?`, [
          result[0]['id'],
        ]);
        res.cookie('accessToken', accessToken, {
          httpOnly: true,
          secure: false,
        });

        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ msg: 'password incorrect', success: false });
      }
    });
  });
};

exports.Logout = async (req, res) => {
  if (req.cookies['accessToken']) {
    res
      .clearCookie('accessToken')
      .json({ msg: 'logout successfull', success: true });
  } else {
    res.send({ msg: 'no token found', success: false });
  }
};
