const express = require('express');
const {
  postjob,
  deletejob,
  getshortlisted,
  viewapplicant,
  deleteapplicant,
  updatejob,
  changepassword,
  editprofile,
  deleteaccount,
} = require('../../controllers/employer');
const router = express.Router();
const authenticate = require('../../middleware/authenticate');

router.post('/postjob', authenticate, postjob);
router.post('/deletejob', authenticate, deletejob);
router.get('/getshortlisted', authenticate, getshortlisted);
router.get('/viewapplicant', authenticate, viewapplicant);
router.post('/deleteapplicant', authenticate, deleteapplicant);
router.post('/updatejob', authenticate, updatejob);
router.post('/changepassword', authenticate, changepassword);
router.post('/editprofile', authenticate, editprofile);
router.post('/deleteaccount', authenticate, deleteaccount);
module.exports = router;
