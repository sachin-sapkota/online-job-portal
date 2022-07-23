const db1 = require('../config/auth_db');

require('dotenv').config();

exports.editprofile = async (req, res) => {
  return res.send({ msg: 'profile edited' });
};

exports.applyjob = async (req, res) => {
  return res.send({ msg: 'apply job' });
};
exports.postfavjob = async (req, res) => {
  return res.send({ msg: 'post fav job' });
};
exports.getfavjob = async (req, res) => {
  return res.send({ msg: 'get fav job' });
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
