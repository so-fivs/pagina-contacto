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
    const { Nombre, Correo, Mensaje, telefono } = req.body;

    if (!Nombre || !Correo || !telefono || !Mensaje) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query(
        'INSERT INTO potencial_cliente(nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)',
        [Nombre, Correo, Mensaje,telefono, ],
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
app.post('/potencial_empleado', (req, res) => {
    console.log('Cuerpo recibido:', req.body);
    // Obtener los datos del cuerpo de la solicitud, coincidiendo con las mayúsculas/minúsculas exactas del JSON
    const { Nombre, Correo, Experiencia, Mensaje, id, telefono } = req.body;
    
    // Validar que los datos requeridos estén presentes
    if (!Nombre || !Correo || !Mensaje || !telefono) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    
    // Convertir Experiencia a un número (tinyint)
    const experienciaNum = parseInt(Experiencia);
    if (isNaN(experienciaNum) || experienciaNum < 0 || experienciaNum > 255) {
        return res.status(400).json({ error: 'La experiencia debe ser un número entre 0 y 255' });
    }
    
    // Convertir telefono a número
    const telefonoNum = parseInt(telefono);
    if (isNaN(telefonoNum)) {
        return res.status(400).json({ error: 'El teléfono debe ser un número válido' });
    }
    
    // Insertar en la base de datos con los nombres de campos correctos
    db.query(
        'INSERT INTO potencial_cliente (Nombre, Correo, Experiencia, Mensaje, telefono) VALUES (?, ?, ?, ?, ?)',
        [Nombre, Correo, experienciaNum, Mensaje, telefonoNum],
        (err, result) => {
            if (err) {
                console.error('Error al insertar en la base de datos:', err);
                return res.status(500).send(err);
            }
            res.json({ message: 'Mensaje enviado con éxito', id: result.insertId });
        }
    );
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
