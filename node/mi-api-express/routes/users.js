const express = require('express');// Importar express hacer que funcione como un servidor web
const router = express.Router();//manda a llamar las funciones de enrutamiento de express
const db = require('../db/conection');//Mandar a llamar la base de datos

// Obtener todos los usuarios
router.get('/getById', (req, res) => {//get, put post, delete
  db.query('SELECT * FROM usuarios', // Consulta SQL para obtener todos los usuarios
    (err, results) => {//Funcion de manejo de errores
    if (err) return res.status(500).json({ error: err });//condicional para evaluar error 
    res.json(results);// Respuesta en formato JSON con los resultados que se obtiene con el query 
  });
});

// Crear un usuario
router.post('/createUsuario', (req, res) => {// Ruta para crear un nuevo usuario
  const { nombre, correo } = req.body;// Extraer nombre y correo del cuerpo de la petición
  db.query('INSERT INTO usuarios (nombre, correo) VALUES (?, ?)',// Consulta SQL para insertar un nuevo usuario
     [nombre, correo],// Valores a insertar
     (err, result) => {// Función de manejo de errores
    if (err) return res.status(500).json({ error: err });// Condicional para evaluar error
    res.json({ mensaje: 'Usuario creado', id: result.insertId });// Respuesta con mensaje y el id del usuario creado
  });
});

module.exports = router;// Exportar el router para usarlo en otros