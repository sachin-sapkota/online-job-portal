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
  Login,
  Register,
  changepassword,
  deleteaccount,
  appliedjobs,
  getfavjobdetails,
} = require('../../controllers/employee');
const permission = require('../../middleware/permission');
const router = express.Router();
router.post('/editprofile', authenticate, editprofile);
router.post('/applyjob', authenticate, applyjob);
router.post('/postfavjob', authenticate, postfavjob);
router.get('/getfavjob', authenticate, getfavjob);
router.post('/deleteaccount', authenticate, deleteaccount);
router.post('/postresume', authenticate, postresume);
router.post('/posteducation', authenticate, posteducation);
router.get('/geteducation', authenticate, geteducation);
router.get('/appliedjobs', authenticate, appliedjobs);
router.get('/getfavjobdetails', authenticate, getfavjobdetails);
router.post('/changepassword', authenticate, changepassword);
router.post('/login', Login);
router.post('/register', Register);
router.post('/changepassword', changepassword);
module.exports = router;
