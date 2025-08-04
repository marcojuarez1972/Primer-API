const express = require('express');// Importar express hacer que funcione como un servidor web
const cors = require('cors');// Importar cors para permitir solicitudes desde otros dominios
require('dotenv').config();// Cargar variables de entorno desde un archivo .env

const app = express();// Crear una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Puerto en el que se ejecutará la aplicación

app.use(cors());// Usar cors para permitir solicitudes desde otros dominios
app.use(express.json());// Formato para parsear el cuerpo de las solicitudes en formato JSON

// Rutas
const userRoutes = require('./routes/users');// Importar las rutas de usuarios
app.use('/api/usuarios', userRoutes);// Usar las rutas de usuarios bajo el prefijo /api/usuarios

app.listen(PORT, () => {//funcion para iniciar el servidor
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);//imprimir si esta corriendo y en que puerto
});