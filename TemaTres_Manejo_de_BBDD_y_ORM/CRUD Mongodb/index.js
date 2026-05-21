// Saul Alexander Che Caamal
import express from 'express';
import dns from 'node:dns/promises';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();

const app = express();
const puerto = 3000;
const uri = process.env.uri;

// Conexión a MongoDB driver nativo
const client = new MongoClient(uri); 
let db;

async function conectar() {
  await client.connect(); 
  db = client.db('test'); // rutas
  console.log('Conexión exitosa a la base de datos');
}

conectar().catch(console.error);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});


app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, edad, correo } = req.body;
    const resultado = await db.collection('usuarios').insertOne({
      nombre,
      edad,
      correo,
      createdAt: new Date(),
    });
    res.status(201).json(resultado);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// usuarios todos
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await db.collection('usuarios').find().toArray(); //
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Obtener usuario por Id
app.get('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Actualizar 
app.put('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const usuarioActualizado = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Eliminar usuario
app.delete('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });
    if (resultado.deletedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

 