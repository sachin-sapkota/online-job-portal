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
  getusertype,
} = require('../../controllers/user');
const { Logout } = require('../../controllers/signwork');
const permission = require('../../middleware/permission');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();

router.post('/logout', Logout);
router.get('/userprofile', authenticate, getuserprofile);
router.get('/userstate', authenticate, getuserstate);
router.get('/searchjobByName', searchjobByName);
router.get('/getalljobs', getalljobs);
router.get('/getjobbyid/:id', getjobbyid);
router.get('/getemployerdetail/:id', getemployerdetail);
router.get('/getemployeedetail/:id', getemployeedetail);
router.get('/getresume', getresume);
router.get('/getusertype', authenticate, getusertype);
module.exports = router;
