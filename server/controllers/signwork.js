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
              `INSERT INTO ${usertype} (${usertype}_id, name, username, email, number, password,usertype) VALUES (?,?,?,? ,?,?, ?)`,
              [randomid, name, username, email, number, hash, usertype],
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

exports.changepassword = async (req, res) => {
  const usertype = req.user.usertype;
  const id = req.user.id;
  email = req.user.email;
  const currpass = req.body.currpass;
  const newpass = req.body.newpass;
  if (currpass == newpass) {
    return res.send({
      msg: 'New password is same as prev password',
      success: false,
    });
  } else {
    db1.execute(
      `SELECT * FROM ${usertype} WHERE email= ?`,
      [email],
      (err, result) => {
        if (err) {
          return res.sendStatus(400).send({ msg: 'error', success: false });
        }
        if (!result.length) {
          return res.send({
            msg: 'Password is incorrect!',
            success: false,
          });
        } else {
          bcrypt.compare(currpass, result[0]['password'], (err, results) => {
            console.log(err, results);
            if (err) {
              return res.send({ msg: 'Password Error!', success: false });
            } else {
              if (results) {
                bcrypt.hash(newpass, 10, (err, hash) => {
                  if (err) {
                    return res.send({ msg: 'error hashing', success: false });
                  } else {
                    db1.execute(
                      `UPDATE ${usertype} SET password= ? WHERE {usertype}_id= ?`,
                      [hash, id],
                      (error, result) => {
                        if (error) {
                          return res.send({
                            msg: 'Error changing password',
                            success: false,
                          });
                        } else {
                          res.send({
                            msg: 'Password Changed Successfully!',
                            success: true,
                          });
                        }
                      }
                    );
                  }
                });
              } else {
                return res.send({ msg: 'Password Incorrect!' });
              }
            }
          });
        }
      }
    );
  }
};

exports.Login = async (req, res) => {
  const email = req.body.email;
  const usertype = req.body.usertype;
  console.log(usertype);
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

          const data = {
            id:
              { usertype } === 'employee'
                ? result[0]?.employee_id
                : result[0]?.employee_id,
            name: result[0]?.name,
            username: result[0]?.username,
            email: result[0]?.email,
            usertype: result[0]?.usertype,
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
              `UPDATE ${usertype} SET Last_login = now() WHERE ${usertype}+_id= ?`,
              [result[0][`${usertype}_id`]]
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
