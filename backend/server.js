require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('uploads')); // Carpeta para almacenar CVs

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pagina-construcciones'
});

// Conectar a MySQL
db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a la base de datos MySQL.');
});

// 📩 Ruta para recibir mensajes de contacto
app.post('/potencial_cliente', (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    if (!nombre || !email || !telefono || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query(
        'INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)',
        [nombre, email, telefono, mensaje],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Mensaje enviado con éxito', id: result.insertId });
        }
    );
});

// 📑 Configurar almacenamiento de archivos con Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// 📂 Ruta para recibir solicitudes de empleo con CV
app.post('/potencial_empleado', upload.single('cv'), (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;
    const cv = req.file ? req.file.filename : null;

    if (!nombre || !email || !telefono || !mensaje || !cv) {
        return res.status(400).json({ error: 'Todos los campos y el CV son requeridos' });
    }

    db.query(
        'INSERT INTO solicitudes_trabajo (nombre, email, telefono, mensaje, cv) VALUES (?, ?, ?, ?, ?)',
        [nombre, email, telefono, mensaje, cv],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Solicitud enviada con éxito', id: result.insertId });
        }
    );
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
