require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const userRoutes = require('./routes/userRoutes');
const fieldRoutes = require('./routes/fieldRoutes'); 

app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'reservapp',
    port: process.env.DB_PORT || 3306,
  });
  

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

// Rutas
app.use('/', userRoutes);
app.use('/api/users', userRoutes);
app.use('/api/fields', fieldRoutes);

// Puerto de la aplicación
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = db;
