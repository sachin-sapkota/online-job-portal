const express = require('express');
const {
  getUsers,
  getuserprofile,
  getuserbyusername,
  Login,
  Register,
  Logout,
  getuserprofilebyid,
  userprofile,
} = require('../controllers/Users');
const verifyToken = require('../middleware/VerifyToken');

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/username', getuserbyusername);
router.post('/logout', Logout);
router.get('/profiles/:id', verifyToken, getuserprofilebyid);
router.get('/profile', verifyToken, getuserprofile);
router.get('/userprofile', verifyToken, userprofile);

module.exports = router;
