const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { strict } = require('assert');
require('dotenv').config();

exports.postjob = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ success: false });
  }
  const job = {
    title: req.body.title,
    description: req.body.description,
    deadline: req.body.deadline,
    sector: req.body.sector,
    job_type: req.body.job_type,
    skills: req.body.skills.toString(),
    salary_time: req.body.salary_time,
    salary_amt: req.body.salary_amt,
    experience: req.body.experience,
    qualification: req.body.qualification,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    city: req.body.city,
    skex: req.body.skex,
    keyres: req.body.keyres,
  };

  const id = req.user.id;
  const employer_name = req.user.name;
  const randomid = randomUUID();
  db1.execute(
    `INSERT INTO job (id,employer_id, employer_name,  title,city, description, keyres, skillsandexperience,deadline, sector, job_type, skills, salary_time, salary_amt, experience, qualification, address, latitude,longitude,post_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())`,
    [
      randomid,
      id,
      employer_name,
      job.title,
      job.city,
      job.description,
      job.keyres,
      job.skex,
      job.deadline,
      job.sector,
      job.job_type,
      job.skills,
      job.salary_time,
      job.salary_amt,
      job.experience,
      job.qualification,
      job.address,
      job.latitude,
      job.longitude,
    ],
    (error, result) => {
      if (error) return res.send({ msg: 'error while posting job' });
      else {
        res.send({ msg: 'job posted successfully', success: true });
      }
    }
  );
};

exports.deletejob = async (req, res) => {
  const id = req.body.id;
};
exports.getjobbyemployerid = async (req, res) => {
  const id = req.user.id;

  db1.execute(`SELECT * FROM job WHERE employer_id=? `, [id], (err, result) => {
    if (result.length) {
      return res.send({ result, success: true });
    } else {
      return res.send({ msg: 'No jobs found', success: false });
    }
  });
};

exports.getshortlisted = async (req, res) => {
  return res.send({ msg: 'getshortlisted' });
};

exports.viewapplicant = async (req, res) => {
  return res.send({ msg: 'viewapplicant' });
};

exports.deleteapplicant = async (req, res) => {
  return res.send({ msg: 'applicant deleted' });
};

exports.updatejob = async (req, res) => {
  return res.send({ msg: 'update job' });
};
exports.changepassword = async (req, res) => {
  return res.send({ msg: 'password changed' });
};

exports.editprofile = async (req, res) => {
  return res.send({ msg: 'edit profile' });
};

exports.deleteaccount = async (req, res) => {
  return res.send({ msg: 'account delete' });
};

exports.Register = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;
  const number = req.body.number;
  let password = req.body.password;
  const usertype = req.body.usertype;

  db1.execute(
    `SELECT * FROM employer WHERE email = ? OR username=? `,
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
              `INSERT INTO employer employer_id, name, username, email, number, password,usertype) VALUES (?,?,?,? ,?,?, ?)`,
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
      `SELECT * FROM employer WHERE email= ?`,
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
                      `UPDATE employer SET password= ? WHERE employer_id= ?`,
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
  if (usertype === 'employer') {
    db1.execute(
      `SELECT * FROM employer WHERE email= ?`,
      [email],
      (err, result) => {
        console.log(result);
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
              id: result[0]?.employer_id,
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
                `UPDATE employer SET Last_login = now() WHERE employer_id= ?`,
                [result[0][`employer_id`]]
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
