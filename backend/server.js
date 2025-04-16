require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware CORS
app.use(cors({
    origin: ['https://pagina-contacto.vercel.app', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// ✅ Headers manuales
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://pagina-contacto.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// 🔁 Multer configurado para guardar archivos en memoria (no en disco)
const storage = multer.memoryStorage();
const upload = multer({ 
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // Limitar el tamaño máximo de archivo a 10MB
});

// ✅ Conexión MySQL
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

// 📩 Ruta para potencial_cliente (sin archivo)
app.post('/potencial_cliente', (req, res) => {
    const { Nombre, Correo, Mensaje, telefono } = req.body;

    if (!Nombre || !Correo || !telefono || !Mensaje) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query(
        'INSERT INTO potencial_cliente (Nombre, Correo, Mensaje, telefono) VALUES (?, ?, ?, ?)',
        [Nombre, Correo, Mensaje, telefono],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.sqlMessage });
            }
            res.json({ message: '✅ Mensaje enviado con éxito', id: result.insertId });
        }
    );
});

// 📎 Ruta para potencial_empleado (con archivo en binario)
app.post('/potencial_empleado', upload.single('CV'), (req, res) => {
    const { Nombre, Correo, Experiencia, Mensaje, telefono } = req.body;

    if (!Nombre || !Correo || !Mensaje || !telefono || !req.file) {
        return res.status(400).json({ error: 'Todos los campos son requeridos, incluyendo el archivo' });
    }

    // Depuración del archivo recibido
    console.log('Tamaño del archivo recibido:', req.file.size); // Ver el tamaño del archivo
    console.log('Primeros bytes del archivo:', req.file.buffer.toString('hex').slice(0, 50)); // Mostrar los primeros 50 bytes en hexadecimal

    const cvBuffer = req.file.buffer;

    db.query(
        'INSERT INTO potencial_empleado (Nombre, Correo, Experiencia, Mensaje, telefono, CV) VALUES (?, ?, ?, ?, ?, ?)',
        [Nombre, Correo, Experiencia || '', Mensaje, telefono, cvBuffer],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.sqlMessage });
            }
            res.json({ message: '✅ CV subido y datos guardados exitosamente', id: result.insertId });
        }
    );
});

// 🚀 Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
