const express = require('express');

const {
  getuserprofile,
  searchjobByName,
  getalljobs,
} = require('../../controllers/user');
const { Login, Register, Logout } = require('../../controllers/signwork');
const permission = require('../../middleware/permission');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.post('/logout', Logout);
router.get('/userprofile', authenticate, getuserprofile);
router.get('/searchjobByName', searchjobByName);
router.get('/getalljobs', getalljobs);
module.exports = router;
