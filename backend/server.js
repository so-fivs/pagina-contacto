require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware CORS al inicio y sin barra final en origin
app.use(cors({
    origin: ['https://pagina-contacto.vercel.app', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// ✅ Agregamos headers manuales para asegurarnos que se respondan
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://pagina-contacto.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

// Crear carpeta uploads si no existe
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Conexión a MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.error('❌ Error conectando a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a la base de datos MySQL.');
});

// Ruta para potencial_cliente
app.post('/potencial_cliente', (req, res) => {
    const { Nombre, Correo, Mensaje, telefono } = req.body;

    if (!Nombre || !Correo || !telefono || !Mensaje) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query(
        'INSERT INTO potencial_cliente(Nombre, Correo, Mensaje, telefono) VALUES (?, ?, ?, ?)',
        [Nombre, Correo, Mensaje, telefono],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.sqlMessage });
            }
            res.json({ message: 'Mensaje enviado con éxito', id: result.insertId });
        }
    );
});

// Ruta para potencial_empleado con CV
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.post('/potencial_empleado', upload.single('CV'), (req, res) => {
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
                return res.status(500).json({ error: err.sqlMessage });
            }
            res.json({ message: '✅ Mensaje enviado con éxito', id: result.insertId });
        }
    );
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
