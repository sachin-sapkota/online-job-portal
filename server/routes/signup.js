const express = require('express');
const router = express.Router();
const db1 = require('../db/db1');
const db2 = require('../db/db2');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('running  .signup');
});

router.post('/', async (req, res) => {
  let username = req.body.username;
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.number;
  let date = req.body.date;
  let password = req.body.password;
  let acctype = req.body.acctype;

  var sql = `INSERT INTO signup(employee_name, employee_number, employee_username, employee_dob) VALUES ("${name}", "${phone}","${username}","${date}" )`;
  db2.query(sql, function (err, result) {
    if (err) throw err;
    console.log('record inserted');

    res.redirect('/');
  });

  res.send('message sent');
});

module.exports = router;
