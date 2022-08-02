const express = require('express');
const authenticate = require('../../middleware/authenticate');
const {
  editprofile,
  posteducation,
  geteducation,
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
router.post('/postfavjob', authenticate, postfavjob);
router.get('/getfavjob', authenticate, getfavjob);
router.post('/changepassword', changepassword);
router.post('/deleteaccount', deleteaccount);
router.post('/postresume', authenticate, postresume);
router.post('/posteducation', authenticate, posteducation);
router.get('/geteducation', authenticate, geteducation);

module.exports = router;
