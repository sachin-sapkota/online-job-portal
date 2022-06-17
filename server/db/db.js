const mysql = require('mysql');
const { MdOutlineExpandLess } = require('react-icons/md');
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'jobxa',
  user: 'root',
  password: '',
});
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});
module.exports = connection;
