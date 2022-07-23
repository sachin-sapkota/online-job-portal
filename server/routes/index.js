const express = require('express');

const employee = require('../routes/employee');
const employer = require('../routes/employer');
const user = require('../routes/user');
const router = express.Router();

router.use('/employee', employee);
router.use('/employer', employer);
router.use('/user', user);
module.exports = router;
