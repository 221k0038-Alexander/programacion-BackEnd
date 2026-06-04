// Saul Alexander Che Caamal

import request from 'supertest';
import app from '../app.js';
import Usuario from '../models/usuario.model.js';

describe('Prueba de la ruta GET /usuarios', () => {

  test('Debe devolver una lista de usuarios', async () => {

    Usuario.find = async () => [
      {
        nombre: 'Saul',
        edad: 20,
        correo: 'saul@gmail.com'
      },
      {
        nombre: 'Juan',
        edad: 25,
        correo: 'juan@gmail.com'
      }
    ];

    const response = await request(app).get('/usuarios');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].nombre).toBe('Saul');

  });

});