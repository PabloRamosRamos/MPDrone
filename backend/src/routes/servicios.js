const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos los servicios
router.get('/', (req, res) => {
  try {
    const servicios = db.prepare('SELECT * FROM servicios ORDER BY orden').all();
    res.json(servicios);
  } catch (error) {
    console.error('Error al obtener servicios:', error);
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
});

// GET un servicio específico
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const servicio = db.prepare('SELECT * FROM servicios WHERE id = ?').get(id);

    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    res.json(servicio);
  } catch (error) {
    console.error('Error al obtener servicio:', error);
    res.status(500).json({ error: 'Error al obtener servicio' });
  }
});

module.exports = router;
