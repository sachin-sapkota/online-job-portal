const express = require('express');
const {
  getUsers,
  getuserprofile,
  getuserbyusername,
  Login,
  Register,
  Logout,
  getuserprofilebyid,
} = require('../controllers/Users');
const verifyToken = require('../middleware/VerifyToken');

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/username', getuserbyusername);
router.delete('/logout', Logout);
router.get('/profile/:id', verifyToken, getuserprofilebyid);
router.get('/profile', verifyToken, getuserprofile);
module.exports = router;
