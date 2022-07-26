const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { strict } = require('assert');

exports.Register = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;
  const number = req.body.number;
  let password = req.body.password;
  const usertype = req.body.usertype;

  db1.execute(
    `SELECT * FROM ${usertype} WHERE email = ? OR username=? `,
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
              `INSERT INTO ${usertype} (id, name, username, email, number, password) VALUES (?,?,?,? ,?, ?)`,
              [randomid, name, username, email, number, hash],
              (error, result) => {
                if (error) return res.send({ msg: 'error while registering' });
                else {
                  res.send({ msg: 'registration sucessfull', success: true });
                }
              }
            );

            // db1.execute(
            //   `UPDATE ${usertype} SET Registered = now() WHERE id= ?`,
            //   [result[0]['id']]
            // );
          }
        });
      }
    }
  );
};

exports.Login = async (req, res) => {
  console.log(req.user, 'inside loginnnn');
  const email = req.body.email;
  const usertype = req.body.usertype;
  console.log(req.body, 'this is from login');
  db1.execute(
    `SELECT * FROM ${usertype} WHERE email= ?`,
    [email],
    (err, result) => {
      if (err) {
        return res
          .sendStatus(400)
          .send({ msg: 'Email or password is incorrect!', success: false });
      }
      if (!result.length) {
        return res.send({
          msg: 'Email or password is incorrect!',
          success: false,
        });
      }

      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (err, results) => {
          if (err) {
            res.throw(err);
          }
          console.log(result);
          const data = {
            id: result[0].id,
            name: result[0].name,
            username: result[0].username,
            email: result[0].email,
            usertype: result[0].usertype,
          };
          if (results) {
            const accessToken = jwt.sign(
              data,
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: '10d',
              }
            );

            db1.execute(
              `UPDATE ${usertype} SET Last_login = now() WHERE id= ?`,
              [result[0]['id']]
            );
            res.cookie('accessToken', accessToken, {
              httpOnly: true,
              secure: false,
            });

            res
              .status(200)
              .json({ success: true, msg: 'Welcome back ' + data.name + '!' });
          } else {
            res
              .status(401)
              .json({ msg: 'Password incorrect!', success: false });
          }
        }
      );
    }
  );
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
