const mysql = require('mysql');

const connection2 = mysql.createConnection({
  host: 'localhost',
  database: 'employer',
  user: 'root',
  password: '',
});

connection2.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});

module.exports = connection2;
