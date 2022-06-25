const express = require('express');
const { getUsers, Login, Register, Logout } = require('../controllers/Users');
const verifyToken = require('../middleware/VerifyToken');

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);

router.delete('/logout', Logout);

module.exports = router;
