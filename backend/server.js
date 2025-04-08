require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use((req, res, next) => {
    console.log("🔍 Headers:", req.headers['content-type']);
    next();
});

const PORT = process.env.PORT || 5000;
// ✅ CONFIGURACIÓN MEJORADA DE CORS
app.use(cors({
    origin: ['http://localhost:3001'], // Puedes agregar más dominios aquí como 'https://tu-dominio.com'
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Debug opcional de los headers
app.use((req, res, next) => {
    console.log("🔍 Headers:", req.headers['content-type']);
    next();
});
// Crear carpeta uploads si no existe
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // ✅ Para procesar form-data
app.use(express.static('uploads')); // Carpeta para almacenar CVs

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Conectar a MySQL
db.connect(err => {
    if (err) {
        console.error('❌ Error conectando a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a la base de datos MySQL.');
});

// 📩 Ruta para recibir mensajes de contacto
app.post('/potencial_cliente', (req, res) => {
    const { Nombre, Correo, Mensaje, telefono } = req.body;

    if (!Nombre || !Correo || !telefono || !Mensaje) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query(
        'INSERT INTO potencial_cliente(Nombre, Correo, Mensaje, telefono) VALUES (?, ?, ?, ?)',
        [Nombre, Correo, Mensaje, telefono],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Mensaje enviado con éxito', id: result.insertId });
        }
    );
});
// Storage para CVs
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
  });
  const upload = multer({ storage });
  app.post('/potencial_empleado', upload.single('CV'), (req, res) => {
    console.log("📦 Body:", req.body);
    console.log("📎 File:", req.file);

    const { Nombre, Correo, Experiencia, Mensaje, telefono } = req.body;
    const cvPath = req.file ? req.file.filename : null;

    if (!Nombre || !Correo || !Mensaje || !telefono) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query(
        'INSERT INTO potencial_empleado (Nombre, Correo, Experiencia, Mensaje, telefono, CV) VALUES (?, ?, ?, ?, ?, ?)',
        [Nombre, Correo, Experiencia || "", Mensaje, telefono, cvPath],
        (err, result) => {
            if (err) {
                console.error('❌ DB Insert error:', err);
                return res.status(500).json({ error: err.sqlMessage });
            }
            res.json({ message: '✅ Mensaje enviado con éxito', id: result.insertId });
        }
    );
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
