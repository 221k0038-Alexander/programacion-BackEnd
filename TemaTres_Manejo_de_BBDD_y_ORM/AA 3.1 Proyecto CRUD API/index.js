// Saul Alexander Che Caamal

import express from 'express';
import mongoose from 'mongoose';
import dns from 'node:dns/promises';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();

const app = express();
const puerto = 3000;


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// ── Conexiin 
const uri = process.env.uri;

mongoose.connect(uri)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Ruta 
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});

// Crear un nuevo usuario (POST /usuarios)
app.post('/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});