const express = require('express');
const { registerUser, loginUser, getUserById } = require('../controllers/userController');
const router = express.Router();

// Ruta para registrar usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para obtener los datos de un usuario por ID
router.get('/users/:id', getUserById);

module.exports = router;
