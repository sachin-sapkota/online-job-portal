const db1 = require('../config/auth_db');

require('dotenv').config();

exports.editprofile = async (req, res) => {
  return res.send({ msg: 'profile edited' });
};

exports.applyjob = async (req, res) => {
  return res.send({ msg: 'apply job' });
};
exports.postfavjob = async (req, res) => {
  console.log(req.user, 'user');
  console.log(req.body, 'body');
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

exports.changepassword = async (req, res) => {
  return res.send({ msg: 'changed passowrd' });
};

exports.deleteaccount = async (req, res) => {
  return res.send({ msg: 'delete account' });
};

exports.editresume = async (req, res) => {
  return res.send({ msg: 'editresume' });
};
