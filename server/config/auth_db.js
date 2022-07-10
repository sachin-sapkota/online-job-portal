const mysql = require('mysql2');

// create the connection to database
const db1 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'auth_db',
});

db1.connect((err) => {
  if (err) throw err;
  console.log('auth_database connected');
});

module.exports = db1;
