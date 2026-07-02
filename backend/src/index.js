const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(express.json());

// Routes
const serviciosRoutes = require('./routes/servicios');
const contactoRoutes = require('./routes/contacto');

app.use('/api/servicios', serviciosRoutes);
app.use('/api/contacto', contactoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MPDrone API is running' });
});

app.listen(PORT, () => {
  console.log(`🚁 MPDrone API running on port ${PORT}`);
});

module.exports = app;
