const db = require('../config/sign_authdb');
const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
require('dotenv').config();
const {
  signupValidation,
  loginValidation,
} = require('../middleware/signValidator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getuserbyemail } = require('../config/sign_authdb');
const { strict } = require('assert');

exports.getUsers = async (req, res) => {
  return res.send(req.body);
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
            return res.status(500).send({ msg: err });
          } else {
            const randomid = randomUUID();
            db1.execute(
              'INSERT INTO users (id, name, username, email,number, password) VALUES (?,?,?,? ,?, ?)',
              [randomid, name, username, email, number, hash],
              (error, result) => {
                if (error) return res.send({ msg: 'error while registering' });
                else {
                  res.send({ msg: 'registration sucessfull' });
                  console.log(result.affectedRows);
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
      return res.sendStatus(400).send({ msg: error });
    }
    if (!result.length) {
      return res.send({ msg: 'Email or password is incorrect' });
    }

    bcrypt.compare(req.body.password, result[0]['password'], (err, results) => {
      if (err) {
        res.throw(err);
      }

      if (results) {
        const accessToken = jwt.sign(
          result[0],
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '10h' }
        );

        db1.execute(`UPDATE users SET Last_login = now() WHERE id= ?`, [
          result[0]['id'],
        ]);
        res.cookie('accessToken', accessToken, {
          httpOnly: true,
          secure: false,
          expires: new Date(Date.now() + 30 * 60 * 1000),
        });

        res.json({ accessToken });
      } else {
        res.send({ msg: 'password incorrect' });
      }
    });
  });
};

exports.Logout = async (req, res) => {
  // const refreshToken = req.cookies.refreshToken;
  // if (!refreshToken) return res.sendStatus(204);
  // const user = await Users.findAll({
  //   where: {
  //     refresh_token: refreshToken,
  //   },
  // });
  // if (!user[0]) return res.sendStatus(204);
  // const userId = user[0].id;
  // await Users.update(
  //   { refresh_token: null },
  //   {
  //     where: {
  //       id: userId,
  //     },
  //   }
  // );
  // res.clearCookie('refreshToken');
  // return res.sendStatus(200);
};
