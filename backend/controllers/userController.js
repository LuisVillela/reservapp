const db = require('../config/db');

// Registro de usuario
exports.registerUser = (req, res) => {
  const { username, password } = req.body;

  // Validar datos
  if (!username || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Insertar usuario en la base de datos
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al registrar usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  });
};

// Inicio de sesión de usuario
exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  // Validar datos
  if (!username || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Buscar usuario en la base de datos
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    // Validar credenciales
    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    const user = results[0];
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      userId: user.id, // Retornamos el `userId` para usarlo en los views
    });
  });
};

// Controlador para obtener un usuario por su ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(results[0]);
  });
};
