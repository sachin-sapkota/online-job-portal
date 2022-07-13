module.exports = {
  validateRegister: (req, res, next) => {
    if (!req.body.username || req.body.username.length < 3) {
      return res.status(400).send({
        msg: 'Please enter a username with min. 3 chars',
      });
    }

    if (!req.body.password || req.body.password.length < 8) {
      return res.status(400).send({
        msg: 'Please enter a password with min. 8 chars',
      });
    }

    if (!req.body.password || req.body.password != req.body.confpassword) {
      return res.status(400).send({
        msg: 'Both passwords must match',
      });
    }
    next();
  },
};
