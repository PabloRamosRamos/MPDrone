# 🚁 MPDrone

Sitio web para servicios de drones industriales - Limpieza e inspección desde el aire.

**Dominio temporal:** lab.bimode.cl  
**Stack:** React + Vite (Frontend) | Node.js + Express + SQLite (Backend)

---

## 📁 Estructura del Proyecto

```
MPDrone/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── backend/           # Node.js + Express
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   │   ├── servicios.js
│   │   │   └── contacto.js
│   │   └── db/
│   │       ├── index.js
│   │       └── mpdrone.db
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend corre en `http://localhost:5173`

### Backend

```bash
cd backend
npm install

# Copiar archivo de configuración
cp .env.example .env

# Editar .env con tus credenciales SMTP

# Iniciar servidor
npm run dev
```

El backend corre en `http://localhost:4000`

---

## 🔧 Configuración

### Variables de Entorno (Backend)

Crear archivo `.env` en `/backend`:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-app
CONTACT_EMAIL=hola@mpdrone.cl
```

---

## 📡 API Endpoints

### GET `/api/health`
Health check del servidor

### GET `/api/servicios`
Obtener todos los servicios disponibles

### GET `/api/servicios/:id`
Obtener un servicio específico

### POST `/api/contacto`
Enviar formulario de contacto

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.cl",
  "telefono": "+56912345678",
  "empresa": "Mi Empresa SpA",
  "servicio": "Limpieza de fachadas",
  "mensaje": "Necesito cotización para un edificio de 20 pisos"
}
```

---

## 🚀 Deployment

### Frontend (Vercel)

1. Conectar repositorio en Vercel
2. Configurar proyecto:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Agregar dominio custom: `lab.bimode.cl`

### Backend (Railway / Vercel)

**Opción A: Railway**
1. Conectar repositorio
2. Root directory: `backend`
3. Start command: `npm start`
4. Agregar variables de entorno desde `.env.example`

**Opción B: Vercel Serverless**
1. Deploy desde `/backend`
2. Ya tiene `vercel.json` configurado
3. Agregar variables de entorno en dashboard

---

## 🎨 Características

- ✅ Diseño moderno con colores corporativos (#00C2FF, #A8E600)
- ✅ Totalmente responsive
- ✅ Formulario de contacto funcional
- ✅ Catálogo de servicios dinámico
- ✅ Base de datos SQLite
- ✅ API REST completa
- ✅ Emails automáticos de confirmación

---

## 🛠️ Tecnologías

**Frontend:**
- React 18
- Vite
- CSS3 (sin frameworks)
- Font: Space Grotesk

**Backend:**
- Node.js
- Express
- Better-SQLite3
- Nodemailer
- CORS

**Deploy:**
- Vercel (Frontend)
- Railway/Vercel (Backend)

---

## 📝 Notas

- Este proyecto vive temporalmente en `lab.bimode.cl`
- Es completamente independiente del proyecto Bimode
- Base de datos SQLite para simplicidad (migrar a PostgreSQL en producción si es necesario)
- Emails configurados con Nodemailer (compatible con Gmail, SendGrid, etc.)

---

## 👤 Autor

Pablo Ramos  
p.e.ramos.ramos@gmail.com

---

## 📄 Licencia

Privado - MPDrone SpA © 2026
