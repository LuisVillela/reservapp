const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'reservapp',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

module.exports = db;
