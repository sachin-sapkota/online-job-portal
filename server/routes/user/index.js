const express = require('express');

const {
  getuserprofile,
  getuserstate,
  searchjobByName,
  getalljobs,
  getjobbyid,
  getemployerdetail,
  getemployeedetail,
  getresume,
} = require('../../controllers/user');
const { Login, Register, Logout } = require('../../controllers/signwork');
const permission = require('../../middleware/permission');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.post('/logout', Logout);
router.get('/userprofile', authenticate, getuserprofile);
router.get('/userstate', authenticate, getuserstate);
router.get('/searchjobByName', searchjobByName);
router.get('/getalljobs', getalljobs);
router.get('/getjobbyid/:id', getjobbyid);
router.get('/getemployerdetail/:id', getemployerdetail);
router.get('/getemployeedetail/:id', getemployeedetail);
router.get('/getresume', getresume);
module.exports = router;
