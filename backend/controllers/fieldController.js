const db = require('../config/db');

// Crear una nueva cancha
exports.createField = (req, res) => {
    const { name, location, status, image_url, admin_id } = req.body;
  
    const query = 'INSERT INTO fields (name, location, status, image_url, admin_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, location, status, image_url, admin_id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Field created successfully', fieldId: result.insertId });
    });
  };
  

// Obtener todas las canchas
exports.getFields = (req, res) => {
    const query = 'SELECT * FROM fields';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching fields:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json(results);
    });
  };
  

// Actualizar una cancha (solo por su creador)
exports.updateField = (req, res) => {
    const { id } = req.params;
    const { name, location, status, image_url } = req.body;
    const admin_id = req.user.id; // Este es el id del usuario autenticado

    const query = 'UPDATE fields SET name = ?, location = ?, status = ?, image_url = ? WHERE id = ? AND admin_id = ?';
    db.query(query, [name, location, status, image_url, id, admin_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(403).json({ error: 'You do not have permission to update this field' });
        }
        res.status(200).json({ message: 'Field updated successfully' });
    });
};

// Eliminar una cancha (solo por su creador)
exports.deleteField = (req, res) => {
    const { id } = req.params;
    const admin_id = req.user.id; // Este es el id del usuario autenticado

    const query = 'DELETE FROM fields WHERE id = ? AND admin_id = ?';
    db.query(query, [id, admin_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(403).json({ error: 'You do not have permission to delete this field' });
        }
        res.status(200).json({ message: 'Field deleted successfully' });
    });
};
