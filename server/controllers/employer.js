const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
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
  };
  console.log(job, 'posting dfata');
  const id = req.user.id;
  const randomid = randomUUID();
  db1.execute(
    `INSERT INTO job (id,employer_id,  title, description, deadline, sector, job_type, skills, salary_time, salary_amt, experience, qualification, address, latitude,longitude) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      randomid,
      id,
      job.title,
      job.description,
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
      if (error) return res.send({ msg: 'error while registering' });
      else {
        res.send({ msg: 'job posted successfully', success: true });
      }
    }
  );
};

exports.deletejob = async (req, res) => {
  return res.send({ msg: 'delete job' });
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
