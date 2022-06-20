const mysql = require('mysql');

const connection1 = mysql.createConnection({
  host: 'localhost',
  database: 'employee',
  user: 'root',
  password: '',
});
connection1.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});

module.exports = connection1;
