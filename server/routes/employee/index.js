const express = require('express');
const authenticate = require('../../middleware/authenticate');
const {
  editprofile,

  postresume,
  applyjob,
  postfavjob,
  getfavjob,
  changepassword,
  deleteaccount,
} = require('../../controllers/employee');
const permission = require('../../middleware/permission');
const router = express.Router();
router.post('/editprofile', authenticate, permission, editprofile);
router.post('/applyjob', authenticate, permission, applyjob);
router.post('/postfavjob', authenticate, permission, postfavjob);
router.get('/getfavjob', authenticate, permission, getfavjob);
router.post('/changepassword', changepassword);
router.post('/deleteaccount', deleteaccount);
router.post('/postresume', postresume);

module.exports = router;
