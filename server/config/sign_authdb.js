const db1 = require('./auth_db');
const { randomUUID } = require('crypto');

let db = {};

// ***Requests to the user table ***

db.alluser = () => {
  return new Promise((resolve, reject) => {
    db1.query('SELECT * FROM users ', (error, users) => {
      if (error) {
        return reject(error);
      }
      return resolve(users);
    });
  });
};

db.getuserbyemail = (email) => {
  return new Promise((resolve, reject) => {
    const randomid = randomUUID();
    db1.query(
      'SELECT * FROM users  WHERE email = ?',
      [email],
      (error, result) => {
        if (error) {
          return reject(error);
        }

        return resolve(result.insertId);
      }
    );
  });
};

db.insertuser = (name, username, email, number, password) => {
  return new Promise((resolve, reject) => {
    const randomid = randomUUID();
    db1.query(
      'INSERT INTO users (id, name, username, email,number, password) VALUES (?,?,?,? ,?, ?)',
      [randomid, name, username, email, number, password],
      (error, result) => {
        if (error) {
          return reject(error);
        }

        return resolve(result.insertId);
      }
    );
  });
};

db.updateuser = (userName, role, email, password, id) => {
  return new Promise((resolve, reject) => {
    db1.query(
      'UPDATE users SET user_name = ?, role= ?, email= ?, password=? WHERE id = ?',
      [userName, role, email, password, id],
      (error) => {
        if (error) {
          return reject(error);
        }

        return resolve();
      }
    );
  });
};

db.deleteuser = (id) => {
  return new Promise((resolve, reject) => {
    db1.query('DELETE FROM users WHERE id = ?', [id], (error) => {
      if (error) {
        return reject(error);
      }
      return resolve(console.log('user deleted'));
    });
  });
};

module.exports = db;
