const db1 = require('../config/auth_db');

exports.getUsers = async (req, res) => {
  const { user } = req;
  if (!user)
    return res.status(401).json({ msg: 'not logged in', success: false });
  return res.send(req.body);
};

exports.userprofile = async (req, res) => {
  const user = req.body;
  if (!user)
    return res.status(401).json({ msg: 'not logged in', success: false });
  return res.send(req.body);
};

exports.getuserprofile = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ success: false });
  } else {
    return res.send({ success: true });
  }
};

exports.getuserprofilebyid = async (req, res) => {
  db1.execute(
    `SELECT * FROM auth_login WHERE id=? `,
    [req.params],
    (err, result) => {
      if (result.length) {
        return res.send(result);
      } else {
        return res.send({ msg: 'id not found', success: false });
      }
    }
  );
};
exports.getuserbyusername = async (req, res) => {
  const username = req.body.username;
  db1.execute(
    `SELECT * FROM auth_login WHERE username=? `,
    [username],
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This username is already taken!',
          success: false,
        });
      } else {
        return res.send({ msg: 'username found', success: true });
      }
    }
  );
};
