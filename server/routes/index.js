const express = require('express');
const getUsers = require('../controllers/Users');
const Login = require('../controllers/Users');
const Register = require('../controllers/Users');
const Logout = require('../controllers/Users');
const verifyToken = require('../middleware/VerifyToken.js');
const refreshToken = require('../controllers/RefreshToken.js');

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

module.exports = router;
