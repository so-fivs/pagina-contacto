require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos MySQL (ajusta según tu configuración en XAMPP)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',   // Usuario por defecto de XAMPP
    password: '',   // Generalmente vacío en XAMPP
    database: 'pagina-construcciones'
});

// Conectar a MySQL
db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL.');
});

// Rutas del backend

// 🟢 Obtener todos los clientes
app.get('/clientes', (req, res) => {
    db.query('SELECT * FROM potencial_cliente', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 🔵 Agregar un nuevo cliente
app.post('/clientes', (req, res) => {
    const { nombre, email, telefono } = req.body;
    if (!nombre || !email || !telefono) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    db.query('INSERT INTO potencial_cliente (nombre, email, telefono) VALUES (?, ?, ?)',
        [nombre, email, telefono],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Cliente agregado con éxito', id: result.insertId });
        }
    );
});

// 🟡 Actualizar un cliente
app.put('/clientes/:id', (req, res) => {
    const { nombre, email, telefono } = req.body;
    const { id } = req.params;

    db.query('UPDATE potencial_cliente SET nombre = ?, email = ?, telefono = ? WHERE id = ?',
        [nombre, email, telefono, id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Cliente actualizado con éxito' });
        }
    );
});

// 🔴 Eliminar un cliente
app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM potencial_cliente WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Cliente eliminado con éxito' });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

