const express = require('express');
const { createField, getFields, updateField, deleteField } = require('../controllers/fieldController');
const router = express.Router();

// Ruta para crear una cancha (solo usuarios autenticados)
router.post('/', createField);

// Ruta para obtener todas las canchas
router.get('/', getFields);

// Ruta para actualizar una cancha específica (solo por su creador)
router.put('/:id', updateField);

// Ruta para eliminar una cancha específica (solo por su creador)
router.delete('/:id', deleteField);

module.exports = router;
