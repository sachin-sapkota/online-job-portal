const mysql = require('mysql2');

// create the connection to database
const db1 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jobxa_app',
});

db1.connect((err) => {
  if (err) throw err;
  console.log('jobxa database connected');
});

module.exports = db1;
