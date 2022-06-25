const db = require('../config/sign_authdb');
const db1 = require('../config/auth_db');
const { randomUUID } = require('crypto');
const {
  signupValidation,
  loginValidation,
} = require('../middleware/signValidator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getuserbyemail } = require('../config/sign_authdb');

exports.getUsers = async (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

exports.Register = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;
  const number = req.body.number;
  let password = req.body.password;
  db1.execute(
    `SELECT * FROM users WHERE email = ? AND username=?`,
    [email, username],
    (err, result) => {
      console.log(result);
      if (result.length) {
        return res.status(409).send({
          msg: 'this user is already in use!',
        });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({ msg: err });
          } else {
            const randomid = randomUUID();
            db1.query(
              'INSERT INTO users (id, name, username, email,number, password) VALUES (?,?,?,? ,?, ?)',
              [randomid, name, username, email, number, password],
              (error, result) => {
                if (error) return res.send({ msg: 'error while registering' });
                else {
                  res.send({ msg: 'registration sucessfull' });
                  console.log(result.affectedRows);
                }
              }
            );
          }
        });
      }
    }
  );
};

// exports.Login = async (req, res) => {
//   try {
//     const user = await Users.findAll({
//       where: {
//         email: req.body.email,
//       },
//     });
//     const match = await bcrypt.compare(req.body.password, user[0].password);
//     if (!match) return res.status(400).json({ msg: 'Wrong Password' });
//     const userId = user[0].id;
//     const name = user[0].name;
//     const email = user[0].email;
//     const usertype = user[0].usertype;
//     const accessToken = jwt.sign(
//       { userId, name, email, usertype },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: '15s',
//       }
//     );
//     const refreshToken = jwt.sign(
//       { userId, name, email },
//       process.env.REFRESH_TOKEN_SECRET,
//       {
//         expiresIn: '1d',
//       }
//     );
//     await Users.update(
//       { refresh_token: refreshToken },
//       {
//         where: {
//           id: userId,
//         },
//       }
//     );
//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });
//     res.json({ accessToken });
//   } catch (error) {
//     res.status(404).json({ msg: 'Email not found' });
//   }
// };

exports.Login = async (req, res) => {
  try {
    db1.execute(
      `SELECT * FROM users WHERE email= req.body.email`,
      (err, result) => {
        if (err) {
          throw err;
          return res.sendStatus(400).send({ msg: error });
        }
        if (!result.length) {
          return res.send({ msg: 'Email or password is incorrect' });
        }
        // const match= bcrypt.compare(req.body.password)
        console.log(result);
      }
    );
  } catch (error) {
    res.staus(404).json({ msg: 'Email not found' });
  }
};

exports.Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};
