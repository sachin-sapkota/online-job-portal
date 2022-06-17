const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('user home page');
});
router.get('/name', (req, res) => {
  res.send('user name page');
});
module.exports = router;
