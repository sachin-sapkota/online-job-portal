const express = require('express');
const {
  editprofile,
  editresume,
  applyjob,
  postfavjob,
  getfavjob,
  changepassword,
  deleteaccount,
} = require('../../controllers/employee');
const router = express.Router();
router.post('/editprofile', editprofile);
router.post('/applyjob', applyjob);
router.post('/postfavjob', postfavjob);
router.get('/getfavjob', getfavjob);
router.post('/changepassword', changepassword);
router.post('/deleteaccount', deleteaccount);
router.post('/editresume', editresume);

module.exports = router;
