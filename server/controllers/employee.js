const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { strict } = require('assert');
require('dotenv').config();

exports.editprofile = async (req, res) => {
  const id = req.user.id;
  const data = req.body.data;
  console.log(data);
  // db1.execute(
  //   `UPDATE employee SET name=? gender=? number=? email=? email=? website=? dob=? salary_time=? salary_amt=? allow_listing=? category=? description=? facebook=? whatsapp=? youtube`
  // );
  return res.send({ success: true });
};

exports.applyjob = async (req, res) => {
  employee_id = req.user.id;
  job_id = req.body.id;

  db1.execute(
    `SELECT * FROM apply_job WHERE job_id = ?  `,
    [job_id],
    (err, result) => {
      if (result.length) {
        return res.send({ msg: 'Job already applied!', posted: false });
      } else {
        db1.execute(
          `INSERT INTO apply_job (employee_id, job_id) VALUES (?,?)`,
          [employee_id, job_id],
          (error, result) => {
            if (error)
              return res.send({ msg: 'error while applying', success: false });
            else {
              return res.send({
                msg: 'Job Applied Sucessfully!',
                success: true,
                posted: false,
              });
            }
          }
        );
      }
    }
  );
};
exports.postfavjob = async (req, res) => {
  id = req.user.id;
  usertype = req.user.usertype;
  job_id = req.body.data.job_id;

  db1.execute(
    `SELECT * FROM liked_jobs WHERE job_id = ?  `,
    [job_id],
    (err, result) => {
      if (result.length) {
        db1.execute(
          `DELETE FROM liked_jobs WHERE job_id= ?`,
          [job_id],
          (err, result) => {
            if (err)
              return res.send({ msg: 'error while deleting', success: false });
            else {
              res.send({ msg: 'deleted', success: true, like: false });
            }
          }
        );
      } else {
        db1.execute(
          `INSERT INTO liked_jobs (employee_id, job_id) VALUES (?,?)`,
          [id, job_id],
          (error, result) => {
            if (error)
              return res.send({ msg: 'error while liking', success: false });
            else {
              res.send({ msg: 'post liked', success: true, like: true });
            }
          }
        );
      }
    }
  );
};

exports.getfavjob = async (req, res) => {
  id = req.user.id;
  db1.execute(
    `SELECT job_id FROM liked_jobs WHERE employee_id=? `,
    [id],
    (err, result) => {
      if (result.length) {
        return res.send(result);
      } else {
        return res.send({ msg: 'no liked jobs', success: false });
      }
    }
  );
};
exports.getfavjobdetails = async (req, res) => {
  id = req.user.id;
  db1.execute(
    `SELECT job_id FROM liked_jobs WHERE employee_id=? `,
    [id],
    (err, result) => {
      if (typeof result !== 'undefined' && result.length > 0) {
        const id = result[0].job_id;

        db1.execute(`SELECT * FROM job WHERE id=?`, [id], (err, results) => {
          if (results.length) {
            return res.send({ results, success: true });
          } else {
            return res.send({ msg: 'no jobs found', success: true });
          }
        });
      } else {
        return res.send({ msg: 'no liked jobs', success: false });
      }
    }
  );
};

exports.deleteaccount = async (req, res) => {
  const id = req.user.id;
  const usertype = req.user.usertype;
  db1.execute(
    `DELETE FROM employee,apply_job, education, language, liked_jobs  WHERE employee_id= ?`,
    [id],
    (error, result) => {
      if (error) {
        res.send({ msg: 'Error deleting account', success: false });
      } else {
        if (req.cookies['accessToken']) {
          res
            .clearCookie('accessToken')
            .json({ msg: 'Account Deleted successfully!', success: true });
        } else {
          res.send({ msg: 'Deletion failed!', success: false });
        }
      }
    }
  );
};

exports.editresume = async (req, res) => {
  return res.send({ msg: 'editresume' });
};
exports.appliedjobs = async (req, res) => {
  const id = req.user.id;
  db1.execute(
    `SELECT * FROM apply_job where employee_id= ?`,
    [id],
    (err, result) => {
      if (err) {
        return res.send({ msg: 'error', success: false });
      } else {
        if (typeof result !== 'undefined' && result.length > 0) {
          const id = result[0].job_id;

          db1.execute(`SELECT * FROM job WHERE id=?`, [id], (err, results) => {
            if (results.length) {
              return res.send({ results, success: true });
            } else {
              return res.send({ msg: 'no jobs found', success: true });
            }
          });
        } else {
          return res.send({ msg: 'Job not found!', success: false });
        }
      }
    }
  );
};

exports.postresume = async (req, res) => {
  return res.send({ msg: 'post resume' });
};
exports.posteducation = async (req, res) => {
  id = req.user.id;
  data = req.body.education;
  console.log(req.user);
  console.log(req.body);
  db1.execute(
    `INSERT INTO education (employee_id, title, institute, fromdate, todate, description) VALUES( ?,?,?,?,?,?) `,
    [id, data.title, data.institute, data.from, data.to, data.description],
    (error, result) => {
      if (error) {
        res.send({ msg: ' error posting education ', success: false });
      }

      if (result) {
        res.send({ msg: 'education data posted', success: true });
      }
    }
  );
};

exports.geteducation = async (req, res) => {
  id = req.user.id;
  db1.execute(
    `SELECT * FROM education WHERE employee_id=?`,
    [id],
    (error, result) => {
      if (error) {
        return res.send({
          msg: 'error while getting education ',
          success: false,
        });
      }
      if (result) {
        return res.send(result);
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
  const usertype = req.body.usertype;

  db1.execute(
    `SELECT * FROM employee WHERE email = ? OR username=? `,
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
              `INSERT INTO employee (employee_id, name, username, email, number, password,usertype) VALUES (?,?,?,? ,?,?, ?)`,
              [randomid, name, username, email, number, hash, usertype],
              (error, result) => {
                if (error)
                  return res.send({
                    msg: 'Error while registering',
                    success: false,
                  });
                else {
                  res.send({ msg: 'Registration sucessfull', success: true });
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
      `SELECT * FROM employee WHERE email= ?`,
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
                      `UPDATE employee SET password= ? WHERE employee_id= ?`,
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
  if (usertype === 'employee') {
    db1.execute(
      `SELECT * FROM employee WHERE email= ?`,
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
              id: result[0]?.employee_id,
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
                `UPDATE employee SET Last_login = now() WHERE employee_id= ?`,
                [result[0][`employee_id`]]
              );
              res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: false,
              });

              res.status(200).json({
                success: true,
                msg: 'Welcome back ' + data.name + '!',
              });
            } else {
              res
                .status(401)
                .json({ msg: 'Password incorrect!', success: false });
            }
          }
        );
      }
    );
  } else {
    res.send({ msg: 'user unknown', success: false });
  }
};
