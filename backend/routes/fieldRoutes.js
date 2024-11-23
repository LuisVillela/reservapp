const express = require('express');
const { getFields, createField } = require('../controllers/fieldController');
const router = express.Router();

// Ruta para obtener todos los campos
router.get('/', getFields);

// Ruta para crear un campo
router.post('/', createField);

module.exports = router;
