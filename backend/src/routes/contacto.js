const express = require('express');
const router = express.Router();

// Importar nodemailer de forma segura
let transporter = null;
try {
  const nodemailer = require('nodemailer');

  // Solo configurar transporter si hay variables de entorno
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    console.log('✉️  Email transporter configurado');
  } else {
    console.log('⚠️  SMTP no configurado - emails deshabilitados');
  }
} catch (error) {
  console.log('⚠️  Nodemailer no disponible - emails deshabilitados');
}

// POST - Enviar formulario de contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, email, telefono, empresa, mensaje, servicio } = req.body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    // Si no hay transporter configurado, solo guardar en consola
    if (!transporter) {
      console.log('📧 Nueva solicitud de contacto (email deshabilitado):');
      console.log({ nombre, email, telefono, empresa, servicio, mensaje });
      return res.json({
        success: true,
        message: 'Solicitud recibida (modo desarrollo - emails deshabilitados)'
      });
    }

    // Email a MPDrone
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'hola@mpdrone.cl',
      subject: `Nueva solicitud de cotización - ${nombre}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${empresa || 'No proporcionada'}</p>
        <p><strong>Servicio de interés:</strong> ${servicio || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Email de confirmación al cliente
    const confirmacionCliente = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Hemos recibido tu solicitud - MPDrone',
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${nombre},</p>
        <p>Hemos recibido tu solicitud de cotización y nos pondremos en contacto contigo en las próximas 24 horas.</p>
        <p><strong>Tu mensaje:</strong></p>
        <p>${mensaje}</p>
        <br>
        <p>Saludos,<br><strong>Equipo MPDrone</strong></p>
      `
    };

    await transporter.sendMail(confirmacionCliente);

    res.json({ success: true, message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

module.exports = router;
