const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'mpdrone.db');
const db = new Database(dbPath);

// Crear tabla de servicios
db.exec(`
  CREATE TABLE IF NOT EXISTS servicios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    icono TEXT,
    color TEXT,
    orden INTEGER DEFAULT 0,
    activo INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Insertar servicios iniciales si no existen
const countServicios = db.prepare('SELECT COUNT(*) as count FROM servicios').get();

if (countServicios.count === 0) {
  const insertServicio = db.prepare(`
    INSERT INTO servicios (titulo, descripcion, icono, color, orden)
    VALUES (?, ?, ?, ?, ?)
  `);

  insertServicio.run(
    'Limpieza de fachadas',
    'Lavado de vidrio, revestimientos y muros cortina en altura, sin andamios ni cierres de calle.',
    'eye',
    'cyan',
    1
  );

  insertServicio.run(
    'Paneles solares',
    'Limpieza que recupera hasta un 20% de eficiencia perdida por polvo y sedimento.',
    'solar',
    'green',
    2
  );

  insertServicio.run(
    'Inspección y termografía',
    'Levantamiento fotográfico, térmico y 3D de estructuras, techos y torres.',
    'scan',
    'cyan',
    3
  );

  console.log('✅ Servicios iniciales insertados');
}

module.exports = db;
